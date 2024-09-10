import DatePicker from "react-datepicker";
import DatePickerButton from "./DatePickerButton";
import "./datePickerStyles.css";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import useBookings from "../../hooks/useBookings";
import DatePickerActionBtns from "./DatePickerActionBtns";
import { setStartDate, setEndDate } from "/src/redux/features/dataSlice";
import { addMonths } from "date-fns";

export default function DatePickerElem({ validate, setValidate, isExludeIntervals }) {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const dispatch = useDispatch();

  const bookings = useBookings();

  const selectedHouse = useSelector((state) => state.data.selectedHouse);

  const filteredBookings = bookings.filter((booking) => booking.selectedHouse == selectedHouse);

  const startDate = useSelector((state) => state.data.startDate);
  const endDate = useSelector((state) => state.data.endDate);

  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;

  const tomorrowDate = start != null ? new Date(start) : new Date();
  tomorrowDate.setUTCDate(tomorrowDate.getUTCDate() + 1);

  const excludeIntervals = filteredBookings.map((booking) => ({
    start: new Date(booking.startDate),
    end: new Date(booking.endDate),
  }));

  const datePickerSettings = {
    dateFormat: "dd/MM/yyyy",
    startDate: start,
    endDate: end,
    maxDate: addMonths(new Date(), 12),
    excludeDateIntervals: isExludeIntervals && excludeIntervals,
    calendarClassName: "bg-lightBeige text-18 font-light w-full",
    className: "datePickerStyles",
    shouldCloseOnSelect: false,
    showYearDropdown: true,
    showMonthDropdown: true,
    dropdownMode: "select",
  };

  useEffect(() => {
    if (start && end && start > end) {
      dispatch(setEndDate(""));
    }
  }, [start, end, dispatch]);

  function saveStartDate(date) {
    dispatch(setStartDate(date.toISOString()));
    setValidate({ ...validate, start: true });
  }
  function saveEndDate(date) {
    dispatch(setEndDate(date.toISOString()));
    setValidate({ ...validate, end: true });
  }

  return (
    <>
      {/* //START DATEPICKER  */}
      <div className="max-w-60 datePicker">
        <DatePicker
          selected={start}
          onChange={(date) => saveStartDate(date)}
          selectsStart
          customInput={<DatePickerButton value={startDate} datePickerType={"in"} validate={validate.start} />}
          ref={startDateRef}
          minDate={new Date()}
          children={
            <DatePickerActionBtns
              {...{ startDate, endDate, setValidate }}
              excludeIntervals={isExludeIntervals && excludeIntervals}
              ref={startDateRef}
              endRef={endDateRef}
            />
          }
          {...datePickerSettings}
        />
      </div>
      {/* //END DATEPICKER  */}
      <div className="max-w-60 datePicker">
        <DatePicker
          selected={end}
          onChange={(date) => saveEndDate(date)}
          selectsEnd
          customInput={<DatePickerButton value={endDate} datePickerType={"out"} validate={validate.end} />}
          ref={endDateRef}
          minDate={tomorrowDate}
          children={
            <DatePickerActionBtns
              {...{ startDate, endDate, setValidate }}
              excludeIntervals={isExludeIntervals && excludeIntervals}
              ref={endDateRef}
            />
          }
          {...datePickerSettings}
        />
      </div>
    </>
  );
}
