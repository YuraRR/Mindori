import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function SelectElem({ data, buttonText, defaultValue }) {
  const [selectedItem, setSelectedItem] = useState(``);
  useEffect(() => defaultValue && setSelectedItem(defaultValue), [defaultValue]);

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      {({ open }) => (
        <div className="relative max-w-60 w-full">
          <ListboxButton
            className={`relative block border border-darkGreen text-lg text-left w-full max-w-60 h-12 sm:h-14 pl-3 pr-7 sm:pr-10 `}
          >
            {selectedItem || buttonText}
            <img
              src="/images/Icons/arrowDown.svg"
              alt="arrow"
              className={`${
                open ? "rotate-180" : ""
              } transition-all absolute top-[21px] sm:top-6 right-2 sm:right-5`}
            />
            <span className="text-12 font-light absolute left-3 -top-[8px] bg-lightBeige px-1">{buttonText}</span>
          </ListboxButton>
          <ListboxOptions
            className={`absolute w-full bg-lightBeige transition duration-100 ease-in opacity-0 shadow-2xl text-lg`}
            style={{ opacity: open ? 1 : 0 }}
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
