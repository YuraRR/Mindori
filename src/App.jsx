import MainPage from "./pages/MainPage";
import CertificatePage from "./pages/CertificatePage";
import BookingSelectPage from "./pages/BookingSelectPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./utils/ScrollToTop";
import HouseInformationPage from "./pages/HouseInformationPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="certificate" element={<CertificatePage />} />
          <Route path="booking" element={<BookingSelectPage />} />
          <Route path="/house/:houseTitle" element={<HouseInformationPage />} />
          <Route path="*" element={<CertificatePage />} />
        </Route>
      </Routes>
    </>
  );
}
