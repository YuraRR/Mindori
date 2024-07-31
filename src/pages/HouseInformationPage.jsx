import housesData from "../constants/housesData";
import { useParams } from "react-router-dom";
import VideoBanner from "../components/VideoBanner";
import SupportButton from "../ui/SupportButton";
import Summary from "../components/Summary";
import SummaryMobile from "../components/SummaryMobile";

export default function HouseInformationPage() {
  const { houseTitle } = useParams();
  const house = housesData.find((e) => e.title == houseTitle);
  const { title, images, extraTags, textInfo, info, price } = house;

  if (!house) {
    return (
      <>
        <VideoBanner videoName={"certificates-video"} title=""></VideoBanner>
        <div>House not found</div>
      </>
    );
  }

  return (
    <>
      <div className="relative">
        <VideoBanner videoName={"certificates-video"} title="" size="height"></VideoBanner>
        <SummaryMobile price={price} />
      </div>

      <div className="container relative">
        <SupportButton />
        <section className="w-full mt-24">
          <h2>{title}</h2>
          <figure className="flex max-h-[585px] mt-12 justify-center lg:justify-between">
            <img src={`/images/Houses/${title}.png`} alt={title} className="w-[847px] object-cover" />
            <div className="hidden lg:grid grid-cols-2 gap-5 ml-5">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={`/images/Houses/${img}.png`}
                  alt={img}
                  className="max-h-[130px] w-[196px] object-cover"
                ></img>
              ))}
            </div>
          </figure>
          <ul className="flex flex-wrap text-18 font-light gap-2 md:gap-4 mt-12 w-full justify-center xl:justify-between">
            {Object.entries(extraTags).map(([key, value]) => (
              <li
                key={key}
                className="flex flex-1 min-w-[110px] xs:min-w-[147px] sm:min-w-[170px] max-w-[200px] gap-2 sm:border border-darkGreen sm:px-4 sm:py-3 items-center font-light"
              >
                <img src={`/images/BookingSelectPage/TagsIcons/${key}.svg`} alt={key} className="w-6" />
                {value}
              </li>
            ))}
          </ul>
        </section>
        <section className="flex mt-8 lg:mt-28 justify-between w-full gap-10">
          <div className="max-w-[752px]">
            <h2>Information</h2>
            <p className="mt-6 md:mt-12 text-24">{textInfo}</p>
            <ul className="marker:text-xs py-6 sm:py-12 text-24">
              {info.map((item, index) => (
                <li className="ml-6 list-disc" key={index}>
                  {item.fullText || item.text}
                </li>
              ))}
            </ul>

            <p className="text-24">
              Save big and keep it simple! Book our full package online at a discounted rate. Embrace the best
              value for your unforgettable glamping adventure without worrying about extra costs during your
              getaway.
            </p>
          </div>

          <div className="hidden lg:flex max-w-[433px] w-full">
            <Summary price={price} />
          </div>
        </section>
      </div>
    </>
  );
}
