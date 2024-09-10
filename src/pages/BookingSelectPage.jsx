import VideoBanner from "../components/VideoBanner";
import SearchBlock from "../components/SearchBlock";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import SelectHousesBlock from "../components/SelectHousesBlock";

export default function BookingSelectPage() {
  const availableHouses = useSelector((state) => state.search.availableHouses);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  }, [availableHouses]);
  return (
    <>
      <VideoBanner videoName={"certificates-video"} title=""></VideoBanner>
      <div className="container relative">
        <SearchBlock />
        {isLoading ? <LoadingScreen /> : <SelectHousesBlock {...{ availableHouses }} />}
      </div>
    </>
  );
}
