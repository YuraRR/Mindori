import Contacts from "./Contacts";
import Socials from "./Socials";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import useResize from "../hooks/useResize";
import Animated from "./Animated";

export default function Footer() {
  const location = useLocation();
  const width = useResize();
  const isMobile = width <= 768;
  const pagesWithoutContacts = ["/extraServices/", "/contactInformation/", "/requestBooking"];
  const shouldRenderContacts = !pagesWithoutContacts.some((page) => location.pathname.includes(page));

  return (
    <Animated>
      <div className="container">{shouldRenderContacts && <Contacts />}</div>
      <div className="bg-green w-full sm:max-h-[290px] flex sm:justify-center flex-col sm:items-center">
        <section className="flex py-2 xs:py-12 max-w-[1281px] justify-center flex-col xs:flex-row">
          <img className="hidden lg:block pr-16" src="images/Logo.svg" alt="logo" />
          <div className="grid grid-cols-2 grid-flow-col grid-rows-4 gap-y-6 gap-x-20 px-4 md:px-16 py-8 xs:py-3 border-darkGreen xs:border-x *:w-fit ">
            <NavLinks />
          </div>
          <div className="flex flex-col text-[18px] px-4 md:px-16 border-darkGreen py-4 border-y xs:border-none xs:py-0">
            <span>Adress:</span>

            <a
              className="text-14 font-light"
              href="https://www.google.com/maps?q=41.869560,44.448465"
              target="_blank"
              rel="noopener noreferrer"
            >
              Georgia, Inner Kartli, Kaspi Municipality,
              <br />
              Kavtiskhevi, 41.869560 44.448465
            </a>

            <span>Phone number:</span>
            <a className="text-14 font-light w-fit" href="tel:+995323625043">
              +995323625043
            </a>
            <span>Email:</span>
            <a className="text-14 font-light w-fit" href="mailto:mindori@gmail.com">
              mindori@gmail.com
            </a>
          </div>
          <div className="hidden xl:block">
            <img className="pl-8" src="images/QR Code.png" alt="" />
          </div>
        </section>
        <div className="xs:hidden mx-auto pb-3">
          <Socials />
        </div>
      </div>
    </Animated>
  );
}
