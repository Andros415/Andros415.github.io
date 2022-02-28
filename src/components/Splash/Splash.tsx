import React, { ReactElement } from "react";
import { HashLink } from "react-router-hash-link";
import Typist from "react-typist";

function Splash(): ReactElement {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div className="text-center text-white">
        <h1 className="mb-7 bg-gradient-to-r from-[#61F4DE] to-[#64ACFF] bg-clip-text font-main text-5xl font-bold tracking-wider text-transparent sm:text-7xl">
          Andrei Spatariu
        </h1>
        <div className="m-auto max-w-mobile font-handwriting text-4xl sm:max-w-full sm:text-5xl">
          <Typist cursor={{ show: false }}>
            <span>Full-stack Web Developer</span>
            <Typist.Backspace count={25} delay={7500} />
            <span>University of Georgia Alumni 🐾</span>
          </Typist>
        </div>
        <HashLink to="#About">
          <span className="material-icons-outlined mt-20 text-5xl hover:cursor-pointer motion-safe:animate-bounce">
            expand_circle_down
          </span>
        </HashLink>
      </div>
    </div>
  );
}

export default Splash;
