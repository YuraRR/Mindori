import React, { forwardRef } from "react";

const DatePickerButton = forwardRef(({ value, datePickerType, onClick }, ref) => (
  <>
    <button
      className="max-w-60 w-full min-w-32 h-14 border text-left px-4 text-18 font-light font-canela border-darkGreen"
      onClick={onClick}
      ref={ref}
    >
      {value || <span className="text-lightGray">Select date</span>}
    </button>
    <img
      className="absolute right-1 top-2 pointer-events-none p-2"
      src="/icons/calendar.svg"
      alt="calendar icon"
    />
    <span className="text-12 font-light absolute left-3 -top-[8px] bg-lightBeige px-1">
      {`Check-${datePickerType} date`}
    </span>
  </>
));

export default DatePickerButton;
