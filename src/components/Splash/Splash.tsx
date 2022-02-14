import React, { ReactElement } from "react";
import Typist from "react-typist";
import expand_down from "../../static/materialIcons/expand_circle_down.svg";

function Splash(): ReactElement {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div className="text-center text-white">
        <h1 className="mb-7 bg-gradient-to-r from-[#61F4DE] to-[#64ACFF] bg-clip-text font-main text-5xl font-bold tracking-wider text-transparent sm:text-7xl">
          Andrei Spatariu
        </h1>
        <div className="font-handwriting text-4xl sm:text-5xl">
          <Typist cursor={{ show: false }}>
            <span>Full-stack Web Developer</span>
            <Typist.Backspace count={25} delay={7500} />
            <span>University of Georgia Alumni 🐾</span>
          </Typist>
        </div>
        <a href="#About">
          <img
            className="mx-auto mt-20 hover:cursor-pointer motion-safe:animate-bounce"
            src={expand_down}
            alt="Expand Down"
          />
        </a>
      </div>
    </div>
  );
}

export default Splash;
