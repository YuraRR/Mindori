import { Input } from "@headlessui/react";

export default function InputElem({ title, placeholder, type }) {
  return (
    <div className="relative px-8 w-full">
      <Input
        name={type}
        type="text"
        placeholder={placeholder}
        className="border border-darkGreen border-opacity-50  max-h-[48px] w-full my-6 py-3 pl-5 text-18 bg-lightBeige text-lightGray"
      />
      <span className="text-12 absolute left-10 top-3 bg-lightBeige px-1">{title}</span>
    </div>
  );
}
