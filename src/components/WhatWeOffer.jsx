import whatWeOffer from "../constants/whatWeOffer";
import Animated from "./Animated";
import OfferCard from "./OfferCard";

export default function WhatWeOffer() {
  return (
    <div className="container">
      <Animated>
        <section>
          <h2 className="text-48 text-black pb-16">What we offer</h2>
          <div className="adaptiveGrid">
            {whatWeOffer.map((e) => (
              <OfferCard key={e.id} data={e} imageRoute={"images/MainPage/WhatWeOffer"}></OfferCard>
            ))}
          </div>
        </section>
      </Animated>
    </div>
  );
}
