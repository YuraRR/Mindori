import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="relative flex  flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
