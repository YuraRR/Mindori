import DatePicker from "react-datepicker";
import DatePickerButton from "./DatePickerButton";
import "./datePickerStyles.css";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import useBookings from "../../hooks/useBookings";
import DatePickerActionBtns from "./DatePickerActionBtns";
import { setStartDate, setEndDate } from "../../features/dates/datesSlice";
import { addMonths } from "date-fns";

export default function DatePickerElem() {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const dispatch = useDispatch();

  const bookings = useBookings();

  const startDate = useSelector((state) => state.dates.startDate);
  const endDate = useSelector((state) => state.dates.endDate);

  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;

  const tomorrowDate = start != null ? new Date(start) : new Date();
  tomorrowDate.setUTCDate(tomorrowDate.getUTCDate() + 1);

  const excludeIntervals = bookings.map((booking) => ({
    start: new Date(booking.startDate),
    end: new Date(booking.endDate),
  }));

  const datePickerSettings = {
    dateFormat: "dd/MM/yyyy",
    startDate: start,
    endDate: end,
    maxDate: addMonths(new Date(), 12),
    excludeDateIntervals: excludeIntervals,
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

  return (
    <>
      {/* //START DATEPICKER  */}
      <div className="max-w-60 datePicker">
        <DatePicker
          selected={start}
          onChange={(date) => dispatch(setStartDate(date.toISOString()))}
          selectsStart
          customInput={<DatePickerButton value={startDate} datePickerType={"in"} />}
          ref={startDateRef}
          minDate={new Date()}
          children={<DatePickerActionBtns startDate={startDate} endDate={endDate} ref={startDateRef} />}
          {...datePickerSettings}
        />
      </div>
      {/* //END DATEPICKER  */}
      <div className="max-w-60 datePicker">
        <DatePicker
          selected={end}
          onChange={(date) => dispatch(setEndDate(date.toISOString()))}
          selectsEnd
          customInput={<DatePickerButton value={endDate} datePickerType={"out"} />}
          ref={endDateRef}
          minDate={tomorrowDate}
          children={<DatePickerActionBtns startDate={startDate} endDate={endDate} ref={endDateRef} />}
          {...datePickerSettings}
        />
      </div>
    </>
  );
}
