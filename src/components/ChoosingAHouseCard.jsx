import Button from "../ui/Button/Button";
import Animated from "./Animated";
export default function ChoosingAHouseCard({ data }) {
  const { title, info, tags, price } = data;
  return (
    <Animated duration={0.8}>
      <div className="flex flex-col max-w-[630px] w-full lg:max-h-[1100px] h-full justify-center mx-auto border border-darkGreen border-opacity-50">
        <div className="relative max-h-96 h-full">
          <img
            src={`images/Houses/${title}-2.png`}
            alt={title}
            className="h-full w-full object-cover lg:h-[384px]"
          />
          <article className="bg-transBlack w-full text-center py-4 md:py-5 max-h-[162px] absolute bottom-0">
            <h4 className="text-24 font-glock pt-3 text-white">{title}</h4>
          </article>
        </div>

        <div className="flex h-full flex-col flex-grow py-4 px-2 sm:px-4 xl:px-8">
          <ul className="grid grid-cols-3 md:grid-cols-4 text-18 font-light gap-1 w-full">
            {Object.entries(tags).map(([key, value]) => (
              <li key={key} className="flex w-full h-10 gap-1 items-center">
                <img src={`images/BookingSelectPage/TagsIcons/${key}.svg`} alt={key} className="w-6" />
                {value}
              </li>
            ))}
          </ul>

          <ul className="marker:text-xs pt-3 md:pt-7">
            {info.map((item, index) => (
              <li className="ml-6 text-20 leading-6 sm:leading-8 list-disc" key={index}>
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
    </Animated>
  );
}
