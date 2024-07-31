import OfferCard from "./OfferCard";
import facilitiesCards from "../constants/facilitiesCards";
export default function ImportantNotes() {
  return (
    <div className="container">
      <section className="mt-24">
        <h2>Important notes</h2>
        <div className="py-12">
          <h3 className="pb-6">Concept</h3>
          <p className="font-light text-24">
            Glamping is a place where urban comfort meets pristine nature. We relax our souls by waking up from
            birdsong, drinking coffee on the verandas, chatting with friends and family sitting by the fire,
            tasting wine, doing yoga, cooking and cycling. The format of our glamping involves an environmentally
            friendly attitude towards nature and other people, we are for silence and an atmosphere of good
            neighborliness.
          </p>
        </div>
        <div name="Attractions">
          <h3 className="pb-5">What is in the common area:</h3>
          <div className="adaptiveGrid">
            {facilitiesCards.map((card) => (
              <OfferCard key={card.id} data={card} imageRoute={"/images/MainPage/Facility"}></OfferCard>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-6 mb-24">
        <h3>What should I consider when planning your visit:</h3>
        <p className="font-light text-24 max-w-[630px] py-4 sm:py-8">
          It is important for us not to disturb the fragile ecological balance of the area. Therefore, we kindly
          ask you:
        </p>
        <div className="flex gap-8 md:gap-16 font-light text-24 marker:text-xs sm:marker:text-base border-darkGreen border-b pb-8">
          <ul className="list-disc w-1/2 md:w-fit sm:leading-10 pl-4">
            <li>don`t disturb other guests, and keep quiet</li>
            <li>don`t touch other people's animals</li>
            <li>watch over your children and animals</li>
            <li>no smoking</li>
          </ul>
          <ul className="list-disc w-1/2 md:w-fit sm:leading-10">
            <li>observe the culture of drinking alcohol</li>
            <li>be careful with fire</li>
            <li>don`t litter</li>
            <li>take care of all natural objects</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
