import { setStartDate, setEndDate } from "/src/redux/features/dataSlice";
import getDatesBetween from "../../utils/getDatesBetween";
import { useDispatch } from "react-redux";
import { forwardRef } from "react";
import { toast } from "sonner";

const DatePickerActionBtns = forwardRef(({ startDate, endDate, setValidate, endRef, excludeIntervals }, ref) => {
  const dispatch = useDispatch();

  const datesBetweenSelected = getDatesBetween(startDate, endDate);
  const excludeDates = excludeIntervals?.flatMap((e) => getDatesBetween(new Date(e.start), new Date(e.end)));

  const handleCancel = () => {
    dispatch(setStartDate(""));
    dispatch(setEndDate(""));

    ref.current?.setOpen(false);
    setValidate({ start: false, end: false });
  };

  const handleSave = () => {
    if (excludeIntervals) {
      const isValid = !excludeDates.some((e) => datesBetweenSelected.includes(e));
      if (!isValid) return toast.error("Selected dates is unavailable");
    }

    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
    ref.current?.setOpen(false);
    endRef?.current?.setOpen(true);
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
