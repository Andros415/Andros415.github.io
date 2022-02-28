import React, { ReactElement, useState } from "react";
import { HashLink } from "react-router-hash-link";

interface NavbarLink {
  name: string;
  link: string;
}

interface MobileNavbarProps {
  NavbarLinks: Array<NavbarLink>;
  isOpen: boolean;
}

const MobileNavbar = ({
  NavbarLinks,
  isOpen,
}: MobileNavbarProps): ReactElement => {
  return (
    <div
      className={`fixed top-[76px] z-10 ${
        isOpen ? "flex" : "hidden"
      } m align-center min-w-full flex-col space-y-3 bg-slate-900/95 p-5 pl-6 font-handwriting text-3xl text-white backdrop-blur-sm transition md:hidden`}
    >
      {NavbarLinks.map((NavLink) => (
        <HashLink
          key={NavLink.name}
          to={NavLink.link}
          className="transition-colors hover:underline hover:decoration-teal hover:underline-offset-4"
        >
          {NavLink.name}
        </HashLink>
      ))}
    </div>
  );
};

export default MobileNavbar;
