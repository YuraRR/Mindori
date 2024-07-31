import whatWeOffer from "../constants/whatWeOffer";
import OfferCard from "./OfferCard";

export default function WhatWeOffer() {
  return (
    <div className="container">
      <section>
        <h2 className="text-48 text-black pl-10 pb-16">What we offer</h2>
        <div className="adaptiveGrid">
          {whatWeOffer.map((e) => (
            <OfferCard key={e.id} data={e} imageRoute={"/images/MainPage/WhatWeOffer"}></OfferCard>
          ))}
        </div>
      </section>
    </div>
  );
}
