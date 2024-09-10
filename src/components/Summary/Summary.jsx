import DatePickerElem from "../../ui/DatePicker/DatePickerElem";
import SelectElem from "../../ui/SelectElem";
import useDaysDiff from "../../hooks/useDaysDiff";
import Button from "../../ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import useFormatDate from "../../hooks/useFormatDate";
import SummaryPricesList from "./SummaryPricesList";
import { useState } from "react";
import { setGuestsAmount } from "../../redux/features/dataSlice";

export default function Summary({
  isExtraServices,
  isSelect,
  house,
  route,
  isButton,
  isMobileButton,
  buttonText,
  buttonClassname = "mainButton",
}) {
  const [validate, setValidate] = useState({ start: true, end: true });

  const guestsData = Array.from({ length: house.guestsCapacity }, (_, i) => i + 1);

  const daysDiff = useDaysDiff();

  const formatedDates = useFormatDate();

  const guestsAmount = useSelector((state) => state.data.guestsAmount);

  const dispatch = useDispatch();

  function saveData(guest) {
    dispatch(setGuestsAmount(guest));
  }

  return (
    <section className="max-w-[612px]  w-full bg-lightBeige mx-auto">
      <div className="flex flex-col sm:border border-darkGreen p-6">
        {isSelect ? (
          <>
            <div className="flex max-w-[390px] w-full h-[56px] justify-between gap-4 relative *:w-full">
              <DatePickerElem validate={validate} setValidate={setValidate} isExludeIntervals={true} />
            </div>
            <div className="pt-10">
              <SelectElem
                data={guestsData}
                buttonText="Guests"
                textType="mdall"
                defaultValue={guestsAmount}
                action={saveData}
              />
            </div>
            <span className="text-16 font-light text-darkGray p-2 py-4">
              stay: {daysDiff} {daysDiff == 1 ? "night" : "nights"}
            </span>
          </>
        ) : (
          <div className="flex gap-4 pb-6">
            <img src={`images/Houses/${house.title}.png`} className="max-h-[126px]" alt={house.title} />
            <div className="flex flex-col">
              <h4 className="text-24">{house.title}</h4>
              <span className="text-18 font-light pt-6">
                {formatedDates}, {guestsAmount} {guestsAmount == 1 ? "guest" : "guests"}
              </span>
            </div>
          </div>
        )}

        <SummaryPricesList isExtraServices={isExtraServices} house={house} daysDiff={daysDiff} />

        {isButton && (
          <div className={`flex w-full justify-center ${isMobileButton && "lg:hidden"}`}>
            <Button
              {...{ validate, setValidate }}
              className={buttonClassname}
              checkDates={true}
              linkTo={`${route == "reservationConfirmed" ? route : `/${route}/${house.title}`}`}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
