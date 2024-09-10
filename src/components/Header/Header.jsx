import styles from "./Header.module.css";
import Button from "src/ui/Button/Button";
import Burger from "src/ui/Burger/Burger";
import BurgerMenu from "../BurgerMenu";
import NavLinks from "../NavLinks";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function openMenu() {
    setIsActive((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  }
  return (
    <header className={styles.Header}>
      <div className="container relative">
        <div className="hidden lg:block text-xl font-normal leading-6">
          <nav className="flex justify-between py-6 mx-6 xl:mx-12 items-center">
            <NavLinks />
            <Button className={"headerButton"} linkTo={"/booking"}>
              Book now
            </Button>
          </nav>
        </div>
        <div className="flex lg:hidden items-center justify-between">
          <nav className="flex items-center justify-end w-full gap-8 pr-8">
            <a href="#">
              <img src="icons/telegram.svg" alt="telega" />
            </a>
            <a href="#">
              <img src="icons/whatsap.svg" alt="whatsap" />
            </a>
            <a href="#">
              <img src="icons/instagram.svg" alt="instagram" />
            </a>
          </nav>
          <Burger {...{ isActive, openMenu }} />
        </div>
      </div>
      <BurgerMenu {...{ isActive, openMenu }} />
    </header>
  );
}
