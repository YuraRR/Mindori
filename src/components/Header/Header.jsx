import styles from "./Header.module.css";
import Button from "../../ui/Button/Button";
import Burger from "../../ui/Burger/Burger";
import LanguageButton from "../../ui/LanguageButton/LanguageButton";
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

export default function Header() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const links = [
    { name: "Home", path: "/", scrollTo: "Home" },
    { name: "Accommodation", scrollTo: "Accommodation" },
    { name: "Attractions", scrollTo: "Attractions" },
    { name: "Special Offers", path: "/certificate" },
    { name: "Vibe", scrollTo: "Vibe" },
    { name: "FAQ", scrollTo: "FAQ" },
    { name: "Contacts", scrollTo: "Contacts" },
  ];

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -170,
      spy: true,
    });
  };
  return (
    <header className={styles.Header}>
      <div className="container">
        <div className="hidden lg:block">
          <nav className="flex justify-between py-6 mx-6 xl:mx-12 items-center">
            {links.map((link) =>
              location === "" && link.scrollTo ? (
                <ScrollLink key={link.name} to={link.scrollTo} smooth={true} duration={500} offset={-170}>
                  {link.name}
                </ScrollLink>
              ) : link.path ? (
                <RouterLink key={link.name} to={link.path}>
                  {link.name}
                </RouterLink>
              ) : (
                <a key={link.name} onClick={() => goToPageAndScroll(link.scrollTo)}>
                  {link.name}
                </a>
              )
            )}
            <Button className={"headerButton"}>Book now</Button>
            <LanguageButton />
          </nav>
        </div>
        <div className="flex lg:hidden items-center justify-between">
          <LanguageButton />
          <nav className="flex items-center justify-between w-5/6 px-3">
            <a href="#">
              <img src="/icons/telegram.svg" alt="telega" />
            </a>
            <a href="#">
              <img src="/icons/whatsap.svg" alt="whatsap" />
            </a>
            <a href="#">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>

            <Burger />
          </nav>
        </div>
      </div>
    </header>
  );
}
