import certificateUsingData from "../constants/certificateUsingData";
import VideoBanner from "../components/VideoBanner";
import CertificateUsing from "../components/CertificateUsing";
import Activities from "../components/Activities/Activities";
import HowToBuyCertificate from "../components/HowToBuyCertificate";
import QuestionsForm from "../components/QuestionsForm";
import Animated from "../components/Animated";

export default function CertificatePage() {
  return (
    <>
      <VideoBanner videoName={"certificates-video"} title="Gift Certificates"></VideoBanner>

      <div className="container">
        <Animated delay={0.2}>
          <section className="py-8 sm:my-16 max-w-[1280px] flex sm:items-center flex-col" name="Special Offers">
            <p className="font-hortensia text-24 text-center">
              A glamping gift certificate is the epitome of a perfect present for adventure and relaxation
              enthusiasts. <br /> It's a ticket to reconnect with nature in comfort and style, creating cherished
              memories in breathtaking natural settings. With a glamping gift certificate, you're gifting the joy
              of outdoor escapades and the luxury of cozy retreats, all in one delightful package.
            </p>
            <span className="border-b border-green w-full  my-6 sm:my-16"></span>
          </section>
        </Animated>

        <Animated>
          <section className="max-w-full">
            <h2 className="py-6">What certificates we have</h2>

            <div className="flex justify-center md:justify-between items-center gap-4 md:gap-0  flex-wrap">
              <img src="images/CertificatesPage/glamping.png" alt="glamping" className="md:max-w-[45%]" />
              <img src="images/CertificatesPage/gift.png" alt="gift" className="md:max-w-[45%]" />
            </div>
          </section>
        </Animated>

        <Animated delay={0.3} duration={1}>
          <section>
            <h2 className="mt-14 sm:mt-28 mb-7 sm:mb-14">How to use the certificate</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4">
              {certificateUsingData.map((e) => (
                <CertificateUsing key={e.id} data={e} />
              ))}
            </div>
          </section>
        </Animated>

        <Activities />
        <HowToBuyCertificate />
        <QuestionsForm />
      </div>
    </>
  );
}
