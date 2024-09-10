import React from "react";
import { Controller } from "react-hook-form";
import InputMask from "@mona-health/react-input-mask";

export default function InputsBlock({ arr, start, end = arr.length, control }) {
  return (
    <>
      {arr.slice(start, end).map(({ id, placeholder = "", title = "", mask, pattern }) => (
        <Controller
          key={id}
          control={control}
          name={id}
          rules={{
            required: "This field is required",
            pattern: {
              value: pattern,
              message: "Invalid format",
            },
          }}
          defaultValue=""
          render={({ field: { value = "", onChange }, fieldState: { error } }) => (
            <div className="relative w-full">
              <InputMask
                className="border border-darkGreen border-opacity-50 max-h-[48px] w-full my-6 py-3 pl-5 text-18 bg-lightBeige text-gray"
                mask={mask}
                type={"text"}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
              />
              <span className="text-12 absolute left-3 top-3 bg-lightBeige px-1">{title}</span>
              {error?.message && (
                <span className="absolute -bottom-2 left-0 text-red drop-shadow-none font-bold">
                  {error.message}
                </span>
              )}
            </div>
          )}
        />
      ))}
    </>
  );
}
