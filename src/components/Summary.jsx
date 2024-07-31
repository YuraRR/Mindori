import DatePickerElem from "../ui/DatePicker/DatePickerElem";
import SelectElem from "../ui/SelectElem";
import useDaysDiff from "../hooks/useDaysDiff";
import Button from "../ui/Button/Button";

export default function Summary({ price, isMobile }) {
  const guestsData = ["1 adult", "2 adults", "3 adults", "4 adults"];
  const daysDiff = useDaysDiff();

  return (
    <section className="max-w-[433px] lg:min-w-[360px] w-full bg-lightBeige">
      {!isMobile && <h2 className="mb-12">Summary</h2>}

      <div className="flex flex-col border border-darkGreen p-6">
        <div className="flex max-w-[385px] w-full h-[56px] justify-between gap-4 *:w-full">
          <DatePickerElem />
        </div>
        <div className="pt-10">
          <SelectElem data={guestsData} buttonText="Guest" textType="mdall" defaultValue="2 Guests" />
        </div>
        <span className="text-16 font-light text-darkGray p-2 py-4">
          stay: {daysDiff} {daysDiff == 1 ? "night" : "nights"}
        </span>

        <div className="*:flex *:justify-between *:w-full">
          <div className="border-t p-2 py-4 border-darkGreen">
            <span className="text-20">{price} x 1 night</span>
            <span className="text-24">{price * daysDiff}$</span>
          </div>

          <div className="border-b p-2 py-4 border-darkGreen">
            <span className="text-20">Service Fee</span>
            <span className="text-24">30$</span>
          </div>

          <div className="text-24 p-2 py-5">
            <span>Total: </span>
            <span className="text-darkGreen">{price * daysDiff + 30}$</span>
          </div>
        </div>

        {!isMobile && (
          <div className="flex w-full justify-center">
            <Button>Book</Button>
          </div>
        )}
      </div>
    </section>
  );
}
