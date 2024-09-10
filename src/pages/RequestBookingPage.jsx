import VideoBanner from "../components/VideoBanner";
import Summary from "../components/Summary/Summary";
import { useParams } from "react-router-dom";
import housesData from "../constants/housesData";
import RequestBookingForm from "../components/RequestBookingForm";

export default function ContactInformationPage() {
  const { houseTitle } = useParams();
  const house = housesData.find((e) => e.title == houseTitle);

  return (
    <>
      <VideoBanner videoName="booking-video" />
      <div className="container">
        <div className="flex justify-between flex-col lg:flex-row pb-16 sm:pb-[120px] gap-8 mt-[64px] sm:mt-[120px]">
          <section className="lg:border-r border-darkGreen border-opacity-50 lg:pr-8 xl:pr-[60px] mx-auto">
            <h2 className="mb-4 sm:mb-[60px] text-center lg:text-start">Request Booking</h2>
            <RequestBookingForm />
          </section>

          <section>
            <h2 className="mb-4 sm:mb-[60px] text-center lg:text-start">Summary</h2>
            <Summary
              house={house}
              isExtraServices={true}
              buttonText="Request Booking"
              route="reservationConfirmed"
              isButton={true}
              isMobileButton={true}
              buttonClassname={"fullButton"}
            />
          </section>
        </div>
      </div>
    </>
  );
}
