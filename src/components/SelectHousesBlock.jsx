import React from "react";
import ChoosingAHouseCard from "./ChoosingAHouseCard";

export default function SelectHousesBlock({ availableHouses }) {
  return (
    <section className="grid lg:grid-cols-2 mt-16 gap-6 gap-y-12 xl:gap-x-24 min-h-80">
      {availableHouses.length > 0 ? (
        availableHouses.map((data) => <ChoosingAHouseCard key={data.id} data={data} />)
      ) : (
        <h3>There are no suitable offers for this period, please select other dates</h3>
      )}
    </section>
  );
}
