import React, { ReactElement } from "react";
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
        isOpen ? "opacity-100" : "opacity-0"
      } align-center flex min-w-full flex-col space-y-4 bg-slate-900/95 pb-5 pl-5 font-handwriting text-3xl text-white backdrop-blur-sm transition md:hidden`}
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
