import React, { ReactElement, useState } from "react";
import { HashLink } from "react-router-hash-link";
import HamburgerButton from "./HamburgerButton";
import MobileNavbar from "./MobileNavbar";
import ThemeSelector from "./ThemeSelector";

const NavbarLinks = [
  {
    name: "About",
    link: "#About",
  },
  {
    name: `Skills ${String.fromCharCode(38)} Interests`,
    link: "#SkillsAndInterests",
  },
  {
    name: "Projects",
    link: "#Projects",
  },
  {
    name: "Experience",
    link: "#Experience",
  },
];

function Navbar(): ReactElement {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  return (
    <>
      <nav className="fixed z-20 flex min-w-full items-center justify-between bg-lightBase/95 p-5 font-handwriting text-3xl text-slate-800 shadow-sm backdrop-blur-sm dark:bg-slate-900/95 dark:text-white md:justify-evenly md:dark:bg-darkBase/95">
        <HamburgerButton
          isNavbarExpanded={isNavbarExpanded}
          setIsNavbarExpanded={setIsNavbarExpanded}
        />
        <HashLink
          to="#"
          className="transition-colors hover:underline hover:decoration-teal hover:underline-offset-4"
        >{`< Andrei S. />`}</HashLink>
        {NavbarLinks.map((NavLink) => (
          <HashLink
            key={NavLink.name}
            to={NavLink.link}
            className="hidden transition-colors hover:underline hover:decoration-teal hover:underline-offset-4 md:block"
          >
            {NavLink.name}
          </HashLink>
        ))}
        <ThemeSelector isNavbarExpanded={isNavbarExpanded} />
      </nav>
      <MobileNavbar
        NavbarLinks={NavbarLinks}
        isOpen={isNavbarExpanded}
        onSetNavbarExpanded={setIsNavbarExpanded}
      />
    </>
  );
}

export default Navbar;
