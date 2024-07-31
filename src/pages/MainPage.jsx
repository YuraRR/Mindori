import MainBanner from "../components/MainBanner/MainBanner";
import Letter from "../components/Letter";
import WhatWeOffer from "../components/WhatWeOffer";
import Accommodation from "../components/Accommodation";
import Vibe from "/src/components/Vibe";
import ImportantNotes from "/src/components/ImportantNotes";
import Faq from "/src/components/FAQ/";

export default function MainPage() {
  return (
    <>
      <div>
        <MainBanner />
        <Letter />
        <WhatWeOffer />
        <section className="flex items-center justify-center relative my-28">
          <img className="" src="/images/MainPage/Rediscover Soul.svg" alt="Rediscover Soul" />
          <div className="flex flex-col absolute w-full h-40 xs:h-5/6">
            <span className="absolute top-8 right-4/5  xs:top-12 xs:right-1/2 translate-x-1/3 text-96">
              REDISCOVER
            </span>
            <span className="absolute top-24 xs:top-1/2 right-1/2 translate-x-1/2 text-32 font-hortensia">
              YOUR
            </span>
            <span className="absolute bottom-2 xs:bottom-12 sm:bottom-16 right-1/2 translate-x-1/2 text-96">
              SOUL
            </span>
          </div>
        </section>
        <Accommodation />
        <Vibe />
        <ImportantNotes />
        <div className="flex  h-[255px] sm:h-[375px] relative">
          <img
            className="absolute right-0 top-0 w-full h-full object-cover"
            src="/images/MainPage/forest.png"
            alt="forest"
          />
        </div>
        <Faq></Faq>
      </div>
    </>
  );
}
