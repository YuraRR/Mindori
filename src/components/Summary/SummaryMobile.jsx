import Button from "../../ui/Button/Button";
import Summary from "./Summary";
import { useState } from "react";
import useDaysDiff from "../../hooks/useDaysDiff";
import useFormatDate from "../../hooks/useFormatDate";
import { motion, AnimatePresence } from "framer-motion";

export default function SummaryMobile({ house }) {
  const [isOpen, setOpen] = useState(null);
  const daysDiff = useDaysDiff();
  const formatedDates = useFormatDate();

  return (
    <div className="lg:hidden">
      <section className="flex p-3 sm:p-4 justify-between xs:justify-center absolute bg-lightBeige w-full bottom-10 items-center">
        <button onClick={() => (!isOpen ? setOpen(true) : setOpen(false))}>
          <img
            className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all ease-in`}
            src="icons/chevron-down.svg"
          ></img>
        </button>
        <div className="flex flex-col text-16 font-light text-darkGray xs:pl-4 xs:pr-16">
          <div>
            <span>{house.price}$ / </span>
            <span className="">
              {daysDiff} {daysDiff == 1 ? "night" : "nights"}
            </span>
          </div>

          <span>{formatedDates}</span>
        </div>

        <Button linkTo={`/extraServices/${house.title}`}>Book</Button>
      </section>
      <div className="absolute w-full lg:hidden flex justify-center bottom-10 -translate-y-24 z-10">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Summary house={house} isSelect={true} isButton={false} route="extraServices" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
