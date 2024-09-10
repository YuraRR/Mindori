import MainPage from "./pages/MainPage";
import CertificatePage from "./pages/CertificatePage";
import BookingSelectPage from "./pages/BookingSelectPage";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./utils/ScrollToTop";
import HouseInformationPage from "./pages/HouseInformationPage";
import ExtraServicesPage from "./pages/ExtraServicesPage";
import ContactInformationPage from "./pages/ContactInformationPage";
import RequestBookingPage from "./pages/RequestBookingPage";
import ReservationConfirmed from "./pages/ReservationConfirmed";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState } from "react";
import ErrorPage from "./pages/ErrorPage";
import { useTransition, animated } from "@react-spring/web";
import { Toaster, toast } from "sonner";

export default function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();

    const timer = setTimeout(() => handleComplete(), 0);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Toaster richColors />
      {loading && <LoadingScreen />}
      <ScrollToTop />
      {transitions((props, item) => (
        <animated.div style={props}>
          <Routes location={item}>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="certificate" element={<CertificatePage />} />
              <Route path="booking" element={<BookingSelectPage />} />
              <Route path="house/:houseTitle" element={<HouseInformationPage />} />
              <Route path="extraServices/:houseTitle" element={<ExtraServicesPage />} />
              <Route path="contactInformation/:houseTitle" element={<ContactInformationPage />} />
              <Route path="requestBooking/:houseTitle" element={<RequestBookingPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
            <Route path="reservationConfirmed" element={<ReservationConfirmed />} />
          </Routes>
        </animated.div>
      ))}
    </>
  );
}
