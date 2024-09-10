import housesData from "../constants/housesData";
import { useParams } from "react-router-dom";
import VideoBanner from "../components/VideoBanner";
import Summary from "../components/Summary/Summary";
import HouseSmallCard from "../components/HouseSmallCard";
import ExtraServiceCard from "../components/ExtraServiceCard";
import extraServicesData from "../constants/extraServicesData";

export default function ExtraServicesPage() {
  const { houseTitle } = useParams();
  const house = housesData.find((e) => e.title == houseTitle);

  return (
    <>
      <VideoBanner videoName={"booking-video"} title="Booking" />
      <div className="container">
        <div className="flex justify-between flex-col gap-8 xl:flex-row">
          <section className="flex flex-col xl:border-r border-darkGreen border-opacity-50 xl:pr-16 my-[64px] sm:my-[120px] max-w-[881px] mx-auto">
            <div className="flex flex-col w-full">
              <h2 className="mb-4 sm:mb-[60px]">My Booking</h2>
              <HouseSmallCard {...house} />
            </div>
            <h2 className="mt-[64px] sm:mt-[120px] mb-4 sm:mb-[60px]">Extra Services</h2>
            <div className="flex flex-col gap-4 sm:gap-12 w-full items-center">
              {extraServicesData.map((service) => (
                <ExtraServiceCard key={service.id} {...service} />
              ))}
            </div>
          </section>
          <section className="flex flex-col mt-[64px] sm:mt-[120px] mb-[60px] max-w-[737px] xl:max-w-[433px] w-full mx-auto">
            <h2 className="mb-4 sm:mb-[60px]">Summary</h2>
            <Summary
              house={house}
              isSelect={true}
              isExtraServices={true}
              buttonText="Continue"
              route="contactInformation"
              isButton={true}
            />
          </section>
        </div>
      </div>
    </>
  );
}
