import Button from "../ui/Button/Button";
export default function ChoosingAHouseCard({ data }) {
  const { title, info, tags, price } = data;
  return (
    <div className="flex flex-col max-w-[630px] w-full lg:h-[940px] justify-center mx-auto border border-darkGreen border-opacity-25">
      <img src={`/images/Houses/${title}-2.png`} alt={title} className="w-full max-h-96 h-full object-cover" />

      <div className="flex h-full flex-col flex-grow py-4 px-2 sm:px-6 xl:px-8">
        <ul className="grid grid-cols-3 md:grid-cols-4 text-18 font-light gap-1 w-full ">
          {Object.entries(tags).map(([key, value]) => (
            <li key={key} className="flex w-full h-10 gap-1 items-center">
              <img src={`/images/BookingSelectPage/TagsIcons/${key}.svg`} alt={key} className="w-6" />
              {value}
            </li>
          ))}
        </ul>

        <ul className="marker:text-xs pt-7">
          {info.map((item, index) => (
            <li className="ml-6 text-20  list-disc" key={index}>
              {item.fullText || item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mt-auto w-full p-2 md:p-5">
        <span className="font-glock text-darkGreen text-24 font-semibold pt-3">from {price}$</span>

        <Button linkTo={`/house/${title}`}>Choose</Button>
      </div>
    </div>
  );
}
