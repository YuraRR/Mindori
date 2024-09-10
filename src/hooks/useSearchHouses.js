import { useState, useEffect } from "react";
import useBookings from "./useBookings";
import { useSelector } from "react-redux";
import getDatesBetween from "../utils/getDatesBetween";

export default function useSearchHouses() {
  const [bookedHouses, setBookedHouses] = useState([]);
  const bookings = useBookings();
  const searchInterval = useSelector((state) => state.search.searchInterval);

  useEffect(() => {
    const fetchBookedHouses = () => {
      const searchDatesBetween = getDatesBetween(searchInterval.startDate, searchInterval.endDate);

      const houses = bookings.filter((booking) => {
        const { startDate, endDate } = booking;
        if (!startDate || !endDate) return false;

        const datesBetween = getDatesBetween(startDate, endDate);
        return searchDatesBetween.some((e) => datesBetween.includes(e));
      });

      setBookedHouses(houses);
    };

    fetchBookedHouses();
  }, [bookings, searchInterval]);

  return bookedHouses;
}
