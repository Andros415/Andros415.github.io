import React, { ReactElement } from "react";
import { HashLink } from "react-router-hash-link";

function Navbar(): ReactElement {
  return (
    <nav className="fixed z-10 flex min-w-full items-center justify-evenly bg-slate-900/95 p-5 font-handwriting text-3xl text-white backdrop-blur-sm">
      <HashLink
        to="#"
        className="transition-colors hover:underline hover:decoration-teal hover:underline-offset-4"
      >{`< Andrei Spatariu />`}</HashLink>
      <HashLink
        to="#About"
        className="transition-colors hover:underline hover:decoration-teal hover:underline-offset-4"
      >
        About
      </HashLink>
      <HashLink
        to="#Skills"
        className="transition-colors hover:underline hover:decoration-teal hover:underline-offset-4"
      >
        Skills &amp; Interests
      </HashLink>
      <HashLink
        to="#Projects"
        className="transition-colors hover:underline hover:decoration-teal hover:underline-offset-4"
      >
        Projects
      </HashLink>
      <HashLink
        to="#Experience"
        className="transition-colors hover:underline hover:decoration-teal hover:underline-offset-4"
      >
        Experience
      </HashLink>
      <span className="material-icons-outlined text-3xl text-white">
        dark_mode
      </span>
    </nav>
  );
}

export default Navbar;
