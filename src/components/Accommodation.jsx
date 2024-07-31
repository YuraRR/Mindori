import housesData from "../constants/housesData";
import AccommodationCard from "./AccommodationCard";

export default function Accommodation() {
  return (
    <div className="container">
      <section name="Accommodation">
        <h2>Accommodation</h2>
        <div className="flex flex-col">
          {housesData.map(
            (card) => card.id < 3 && <AccommodationCard key={card.id} data={card}></AccommodationCard>
          )}
        </div>
      </section>
    </div>
  );
}
