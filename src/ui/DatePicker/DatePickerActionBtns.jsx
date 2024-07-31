import { setStartDate, setEndDate } from "../../features/dates/datesSlice";
import { useDispatch } from "react-redux";
import { forwardRef } from "react";

const DatePickerActionBtns = forwardRef(({ startDate, endDate }, ref) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setStartDate(""));
    dispatch(setEndDate(""));
    ref.current?.setOpen(false);
  };

  const handleSave = () => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
    ref.current?.setOpen(false);
  };

  return (
    <>
      <div className="flex p-3 px-6 gap-5 text-18">
        <button className="ml-auto" onClick={handleCancel}>
          Cancel
        </button>
        <button className="text-darkGreen" onClick={handleSave}>
          OK
        </button>
      </div>
    </>
  );
});
export default DatePickerActionBtns;
