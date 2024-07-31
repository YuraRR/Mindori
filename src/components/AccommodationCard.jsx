import Button from "../ui/Button/Button";
export default function AccommodationCard({ data }) {
  const { title, info, extraTitle, extraInfo } = data;
  return (
    <div
      className={`flex gap-3 justify-between items-center flex-col py-8
        lg:gap-10 lg:py-14 lg:items-stretch lg:flex-row lg:even:flex-row-reverse`}
    >
      <div className="">
        <img src={`/images/Houses/${title}.png`} alt="" />
      </div>

      <div className="flex flex-col max-w-[640px]  px-3">
        <div className="flex-grow">
          <ul className="marker:text-xs border-darkGreen border-b pb-8">
            {info.map((item, index) => (
              <li className="ml-6 text-24 font-light list-disc md:leading-10" key={index}>
                {item.fullText}
              </li>
            ))}
          </ul>

          <div className="py-4 lg:py-8">
            {extraTitle && <span className="mt-16 text-18">{extraTitle}</span>}
            <ul className={extraTitle ? "marker:text-xs pt-2" : "lg:indent-2"}>
              {extraInfo.map((item, index) => (
                <li
                  className={
                    extraTitle ? "text-18 font-light md:leading-8 list-disc ml-6" : "text-18 font-light md:py-2"
                  }
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Button className="mainButton">Book now</Button>
        </div>
      </div>
    </div>
  );
}
