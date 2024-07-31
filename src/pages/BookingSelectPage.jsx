import VideoBanner from "../components/VideoBanner";
import DatePickerElem from "../ui/DatePicker/DatePickerElem";
import SelectElem from "../ui/SelectElem";
import Button from "../ui/Button/Button";
import housesData from "../constants/housesData";
import ChoosingAHouseCard from "../components/ChoosingAHouseCard";

export default function BookingSelectPage() {
  return (
    <>
      <VideoBanner videoName={"certificates-video"} title=""></VideoBanner>
      <div className="container">
        <section className="flex mt-12 flex-col md:flex-row w-full justify-center items-center lg:justify-between gap-4 lg:gap-12">
          <div className="flex max-w-[600px] h-[56px] w-full justify-between gap-4 *:w-full">
            <DatePickerElem />
          </div>
          <div className="flex max-w-[600px] w-full justify-between gap-4 ">
            <SelectElem data={[1, 2, 3, 4]} buttonText="Number of guests" textType="small" defaultValue={2} />
            <Button>Search</Button>
          </div>
        </section>
        <section className="grid lg:grid-cols-2 mt-16 gap-6 gap-y-12 xl:gap-x-24">
          {housesData.map((data) => (
            <ChoosingAHouseCard key={data.id} data={data} />
          ))}
        </section>
      </div>
    </>
  );
}
