import React, { ReactElement, useState } from "react";
import { HashLink } from "react-router-hash-link";
import HamburgerButton from "./HamburgerButton";
import MobileNavbar from "./MobileNavbar";

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
      <nav className="fixed z-10 flex min-w-full items-center justify-between bg-slate-900/95 p-5 font-handwriting text-3xl text-white backdrop-blur-sm md:justify-evenly">
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
        <span className="material-icons-outlined text-3xl text-white transition-colors hover:cursor-pointer hover:text-teal">
          dark_mode
        </span>
      </nav>
      <MobileNavbar NavbarLinks={NavbarLinks} isOpen={isNavbarExpanded} />
    </>
  );
}

export default Navbar;
