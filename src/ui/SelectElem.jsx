import React, { useRef, useEffect, useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

export default function SelectElem({ data, buttonText, defaultValue, action }) {
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const buttonRef = useRef(null);
  const [optionsWidth, setOptionsWidth] = useState("auto");

  useEffect(() => action(selectedItem), [selectedItem, action]);

  useEffect(() => {
    if (buttonRef.current) {
      setOptionsWidth(buttonRef.current.offsetWidth);
    }
  }, [buttonRef.current]);

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      {({ open }) => (
        <div className="relative w-full">
          <ListboxButton
            ref={buttonRef}
            className="relative block border border-darkGreen text-lg text-left w-full h-12 sm:h-14 pl-3 pr-7"
          >
            {selectedItem || buttonText}
            <img
              src="icons/arrowDown.svg"
              alt="arrow"
              className={`${
                open ? "rotate-180" : ""
              } transition-all absolute top-[21px] sm:top-6 right-2 sm:right-5`}
            />
            <span className="text-12 font-light absolute left-3 -top-[8px] bg-lightBeige px-1">{buttonText}</span>
          </ListboxButton>
          <ListboxOptions
            className={`absolute bg-lightBeige transition-opacity duration-100 ease-in opacity-0 shadow-2xl text-lg z-10`}
            style={{ opacity: open ? 1 : 0, width: `${optionsWidth}px` }}
            anchor="bottom start"
          >
            {data.map((e) => (
              <ListboxOption
                key={e}
                value={e}
                className="data-[focus]:bg-lightGreen py-2 px-3 text-lg font-canela font-light"
              >
                {e}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  );
}
