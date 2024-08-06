import React, { ReactElement } from "react";
import { HashLink } from "react-router-hash-link";
import { MobileNavbarProps } from "./MobileNavbar.interface";

const MobileNavbar = ({
  NavbarLinks,
  isOpen,
  onSetNavbarExpanded,
}: MobileNavbarProps): ReactElement => {
  return (
    <div
      className={`fixed top-[75px] z-20 ${
        isOpen ? "opacity-100" : "opacity-0"
      } align-center flex min-w-full flex-col space-y-4 bg-lightBase/95 dark:bg-slate-900/95 pb-5 pl-5 shadow-md font-handwriting text-3xl text-slate-800 dark:text-white backdrop-blur-sm transition md:hidden`}
    >
      {NavbarLinks.map((NavLink) => (
        <HashLink
          key={NavLink.name}
          to={NavLink.link}
          scroll={(el) => {
            el.scrollIntoView({ behavior: "smooth" });
            onSetNavbarExpanded(false);
          }}
          className={`transition-colors ${
            !isOpen ? "hidden" : ""
          } hover:underline hover:decoration-teal hover:underline-offset-4`}
        >
          {NavLink.name}
        </HashLink>
      ))}
    </div>
  );
};

export default MobileNavbar;
