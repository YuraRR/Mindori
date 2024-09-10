import React from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import links from "src/constants/links";
import useScrollNavigation from "src/hooks/useScrollNavigation";

export default function NavLinks({ openMenu }) {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const { goToPageAndScroll } = useScrollNavigation();

  function closeMenu() {
    openMenu && openMenu();
  }

  return (
    <>
      {links.map((link) => {
        if (location == link.path && link.scrollTo) {
          return (
            <ScrollLink
              key={link.name}
              to={link.scrollTo}
              smooth={true}
              duration={500}
              offset={-170}
              onClick={(e) => closeMenu(e)}
            >
              {link.name}
            </ScrollLink>
          );
        } else if (link.path) {
          return (
            <RouterLink
              key={link.name}
              to={link.path}
              onClick={(e) => {
                e.stopPropagation();
                closeMenu();
              }}
            >
              {link.name}
            </RouterLink>
          );
        } else {
          return (
            <a key={link.name} onClick={() => goToPageAndScroll("/", link.scrollTo)}>
              {link.name}
            </a>
          );
        }
      })}
    </>
  );
}
