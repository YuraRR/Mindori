import housesData from "../constants/housesData";
import AccommodationCard from "./AccommodationCard";
import Animated from "./Animated";

export default function Accommodation() {
  return (
    <div className="container">
      <Animated initialX={-300} duration={0.7} delay={0.2}>
        <section name="Accommodation">
          <h2>Accommodation</h2>
          <div className="flex flex-col w-full">
            {housesData.map(
              (card) => card.id < 3 && <AccommodationCard key={card.id} data={card}></AccommodationCard>
            )}
          </div>
        </section>
      </Animated>
    </div>
  );
}
