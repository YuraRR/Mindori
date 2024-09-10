import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

export default function useBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const bookingsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredBookings = bookingsData.filter((booking) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const startDate = new Date(booking.startDate);
        const endDate = new Date(booking.endDate);
        return startDate >= today && endDate > today;
      });
      setBookings(filteredBookings);
    };

    fetchBookings();
  }, []);

  return bookings;
}
