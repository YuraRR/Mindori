import { useDispatch, useSelector } from "react-redux";
import { setSearchInterval } from "/src/redux/features/searchSlice";
import useSearchHouses from "../../hooks/useSearchHouses";
import styles from "./Button.module.css";
import { useEffect } from "react";
import { setAvailableHouses } from "/src/redux/features/searchSlice";
import housesData from "../../constants/housesData";

export default function SearchButton({ children, setValidate }) {
  const dispatch = useDispatch();
  const startDate = useSelector((state) => state.data.startDate);
  const endDate = useSelector((state) => state.data.endDate);

  const guestsAmount = useSelector((state) => state.data.guestsAmount);

  const bookedHouses = useSearchHouses();

  useEffect(() => {
    if (startDate && endDate) {
      dispatch(
        setAvailableHouses(
          housesData.filter(
            (house) =>
              !bookedHouses.some((bookedHouse) => bookedHouse.selectedHouse == house.title) &&
              house.guestsCapacity >= guestsAmount
          )
        )
      );
    }
  }, [bookedHouses, setAvailableHouses]);

  function saveInterval() {
    if (startDate && endDate) {
      dispatch(setSearchInterval({ startDate, endDate }));
    } else {
      setValidate(
        startDate && !endDate
          ? { start: true, end: false }
          : endDate && !startDate
          ? { start: false, end: true }
          : { start: false, end: false }
      );
    }
  }

  return (
    <button onClick={saveInterval} className={styles.mainButton}>
      {children}
    </button>
  );
}
