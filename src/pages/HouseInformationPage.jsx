import housesData from "../constants/housesData";
import { useParams } from "react-router-dom";
import VideoBanner from "../components/VideoBanner";
import HousePhotosAndTags from "../components/HousePhotosAndTags";
import HouseTextInfo from "../components/HouseTextInfo";
import Summary from "../components/Summary/Summary";
import SummaryMobile from "../components/Summary/SummaryMobile";
import { setSelectedHouse } from "../redux/features/dataSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ErrorPage from "./ErrorPage";

export default function HouseInformationPage() {
  const { houseTitle } = useParams();
  const dispatch = useDispatch();
  const house = housesData.find((e) => e.title == houseTitle);

  if (!house) {
    return <ErrorPage />;
  }
  const { title, images, extraTags, textInfo, info } = house;
  useEffect(() => {
    dispatch(setSelectedHouse(house.title));
  }, []);

  return (
    <>
      <div className="relative">
        <VideoBanner videoName={"certificates-video"} title="" size="height"></VideoBanner>
        <SummaryMobile house={house} />
      </div>

      <div className="container relative">
        <HousePhotosAndTags title={title} images={images} extraTags={extraTags} />

        <section className="flex mt-8 lg:mt-28 justify-between w-full gap-10">
          <HouseTextInfo textInfo={textInfo} info={info} />
          <div className="hidden lg:flex max-w-[433px] w-full">
            <Summary house={house} isSelect={true} buttonText="Book" route="extraServices" isButton={true} />
          </div>
        </section>
      </div>
    </>
  );
}
