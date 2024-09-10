import React, { forwardRef } from "react";

const DatePickerButton = forwardRef(({ value, datePickerType, onClick, validate }, ref) => (
  <div className={`border ${validate ? "border-darkGreen" : "border-red"}`}>
    <button
      className="max-w-60 w-full min-w-28 h-14  text-left px-4 text-20 font-light font-canela"
      onClick={onClick}
      ref={ref}
    >
      {value || <span className="text-lightGray">Select date</span>}
    </button>
    <img
      className="hidden xs:block absolute right-1 top-2 pointer-events-none p-2"
      src="icons/calendar.svg"
      alt="calendar icon"
    />
    <span className="text-12 font-light absolute left-3 -top-[8px] bg-lightBeige px-1">
      {`Check-${datePickerType} date`}
    </span>

    {!validate && (
      <span className="absolute -bottom-5 left-0 bg-lightBeige text-red text-14 border-none">
        This field is required
      </span>
    )}
  </div>
));

export default DatePickerButton;
