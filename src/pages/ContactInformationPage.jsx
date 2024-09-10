import VideoBanner from "../components/VideoBanner";
import Summary from "../components/Summary/Summary";
import ContactInformationForm from "../components/ContactInformationForm";

import { useParams } from "react-router-dom";
import housesData from "../constants/housesData";

export default function ContactInformationPage({ isCertificate }) {
  const { houseTitle } = useParams();
  const house = housesData.find((e) => e.title === houseTitle);

  return (
    <>
      <VideoBanner videoName="booking-video" />
      <div className="container">
        <div className="flex justify-between gap-10">
          <section className="xl:border-r border-darkGreen border-opacity-50 xl:pr-[100px] mx-auto mb-16 sm:mb-[120px] mt-[64px] sm:mt-[120px] ">
            <h2 className="mb-4 sm:mb-[60px]">Contact Information</h2>
            <ContactInformationForm house={house} />
          </section>

          {isCertificate ? (
            ""
          ) : (
            <section className="hidden lg:block">
              <h2 className="mt-[64px] sm:mt-[120px] mb-4 lg:mb-[60px]">Summary</h2>
              <Summary
                house={house}
                isExtraServices={true}
                buttonText="Continue"
                route="contactInformation"
                buttonClassname="fullButton"
              />
            </section>
          )}
        </div>
      </div>
    </>
  );
}
