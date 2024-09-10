import { Disclosure, DisclosureButton, DisclosurePanel, CloseButton } from "@headlessui/react";
import minus from "/ui/minus.svg";
import plus from "/ui/plus.svg";

export default function DisclosureElem({ title, text }) {
  return (
    <Disclosure as="div" className="relative max-w-[984px] border-darkGreen border-b pb-4 sm:pb-6 pl-6 pr-2">
      {({ open }) => (
        <>
          <div className="flex cursor-pointer">
            <DisclosureButton className="flex sm:font-glock text-20 font-medium pt-8 text-left w-full">
              {title}
            </DisclosureButton>
            <DisclosureButton as="button" className="pt-10 p-3 ml-auto">
              <img className="min-h-4 min-w-4 max-h-4 max-w-4" src={open ? minus : plus} alt="" />
            </DisclosureButton>
          </div>

          <DisclosurePanel className="text-14 sm:font-glock font-light pt-3 max-w-[228px] xs:max-w-[887px] leading-5">
            {text}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
