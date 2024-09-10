import DatePickerElem from "../ui/DatePicker/DatePickerElem";
import SelectElem from "../ui/SelectElem";
import { useState } from "react";
import SearchButton from "../ui/Button/SearchButton";
import Animated from "./Animated";
import { useDispatch } from "react-redux";
import { setGuestsAmount } from "/src/redux/features/dataSlice";

export default function SearchBlock() {
  const [validate, setValidate] = useState({ start: true, end: true });
  const dispatch = useDispatch();

  function saveData(guest) {
    dispatch(setGuestsAmount(guest));
  }

  return (
    <Animated initialY={50} delay={0.1}>
      <section className="flex mt-12 flex-col md:flex-row w-full justify-center items-center lg:justify-between gap-8 lg:gap-12">
        <div className="flex max-w-[600px] h-[56px] w-full justify-between gap-4 *:w-full">
          <DatePickerElem validate={validate} setValidate={setValidate} />
        </div>
        <div className="flex max-w-[600px] w-full justify-between gap-4 *:max-w-60">
          <SelectElem data={[1, 2, 3, 4]} buttonText="Guests" defaultValue={2} action={saveData} />
          <SearchButton {...{ setValidate }}>Search</SearchButton>
        </div>
      </section>
    </Animated>
  );
}
