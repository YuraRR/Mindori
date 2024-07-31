import Contacts from "./Contacts";
import { Link } from "react-router-dom";
import Socials from "./Socials";

export default function Footer() {
  return (
    <>
      <div className="container">
        <Contacts />
      </div>
      <div className="bg-green w-full sm:max-h-[290px] flex xs:justify-center flex-col items-center">
        <section className="flex py-6 xs:py-12 max-w-[1281px] justify-center flex-col xs:flex-row">
          <img className="hidden lg:block pr-16" src="/images/Logo.svg" alt="logo" />
          <div className="flex px-6 md:px-16 py-3 gap-16 border-darkGreen xs:border-x">
            <ul className="flex flex-col gap-4 text-18">
              <Link to="/">Home</Link>
              <Link to="/certificate">Accommodation</Link>
              <Link>Attractions</Link>
              <Link>Special Offers</Link>
            </ul>

            <ul className="flex flex-col gap-4">
              <Link>Vibe</Link>
              <Link>FAQ</Link>
              <Link>Contacts</Link>
            </ul>
          </div>
          <div className="flex flex-col text-[18px] px-6 md:px-16 border-darkGreen py-4 border-y xs:border-none xs:py-0">
            <span>Adress:</span>
            <span className="text-14 font-light">
              Georgia, Inner Kartli, Kaspi Municipality,
              <br />
              Kavtiskhevi, 41.869560 44.448465
            </span>
            <span>Phone number:</span>
            <a className="text-14 font-light" href="tel:+995323625043">
              +995323625043
            </a>
            <span>Email:</span>
            <a className="text-14 font-light" href="mailto:mindori@gmail.com">
              mindori@gmail.com
            </a>
          </div>
          <div className="hidden xl:block">
            <img className="pl-8" src="/images/QR Code.png" alt="" />
          </div>
        </section>
        <div className="xs:hidden mx-auto pb-3">
          <Socials />
        </div>
      </div>
    </>
  );
}
