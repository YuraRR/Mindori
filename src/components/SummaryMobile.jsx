import Button from "../ui/Button/Button";
import Summary from "./Summary";
import { useState } from "react";
import useDaysDiff from "../hooks/useDaysDiff";
import useFormatDate from "../hooks/useFormatDate";
export default function SummaryMobile({ price }) {
  const [isOpen, setOpen] = useState(null);
  const daysDiff = useDaysDiff();
  const formatedDates = useFormatDate();

  return (
    <div className="lg:hidden">
      <section className="flex p-4 justify-between sm:justify-center absolute bg-lightBeige w-full bottom-10 ">
        <button onClick={() => (!isOpen ? setOpen(true) : setOpen(false))}>
          <img
            className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all ease-in`}
            src="/icons/chevron-down.svg"
          ></img>
        </button>
        <div className="flex flex-col text-16 font-light text-darkGray sm:pl-4 sm:pr-16">
          <div>
            <span>{price}$ / </span>
            <span className="">
              {daysDiff} {daysDiff == 1 ? "night" : "nights"}
            </span>
          </div>

          <span>{formatedDates}</span>
        </div>

        <Button>Book</Button>
      </section>
      <div className="absolute w-full lg:hidden flex justify-center bottom-10 -translate-y-24 z-10">
        {isOpen && <Summary price={price} isMobile={true} />}
      </div>
    </div>
  );
}
