import Button from "../ui/Button/Button";
export default function AccommodationCard({ data }) {
  const { title, info, extraTitle, extraInfo, imageText } = data;
  return (
    <div
      className={`flex gap-3 items-center justify-between flex-col my-8
      lg:gap-10 lg:my-14 lg:items-stretch lg:flex-row lg:even:flex-row-reverse xl:max-h-[630px]`}
    >
      <div className="relative w-full max-w-[640px] lg:max-w-[500px] xl:max-w-[600px] h-full">
        <img
          className="w-full max-h-[224px] lg:max-h-full h-full lg:min-w-[450px] object-cover"
          src={`images/Houses/${title}.png`}
          alt={title}
        />
        <article className="bg-transBlack absolute bottom-0 w-full text-white text-center py-4 lg:py-8 max-h-[162px]">
          <h4 className="text-24 font-glock pt-3">{title}</h4>
          <p className="hidden lg:block text-16 max-w-[430px] w-full mx-auto font-glock pt-4">{imageText}</p>
        </article>
      </div>

      <div className="flex flex-col max-w-[640px] w-full">
        <div className="flex-grow">
          <ul className="marker:text-xs border-darkGreen border-b pb-6">
            {info.map((item, index) => (
              <li className="ml-6 text-20 font-light list-disc leading-8 md:leading-9" key={index}>
                {item.fullText}
              </li>
            ))}
          </ul>

          <div className="py-4 lg:py-6">
            {extraTitle && <span className="mt-16 text-18">{extraTitle}</span>}
            <ul className={extraTitle ? "marker:text-xs pt-2" : "lg:indent-2"}>
              {extraInfo.map((item, index) => (
                <li
                  className={
                    extraTitle
                      ? "text-18 font-light leading-6 md:leading-8 list-disc ml-8"
                      : "text-18 font-light py-1"
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
          <Button className="longMobileButton" linkTo={"/booking"}>
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
}
