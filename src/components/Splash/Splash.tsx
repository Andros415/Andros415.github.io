import React, { ReactElement } from "react";

function Splash(): ReactElement {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <div className="text-white text-center space-y-7">
        <h1 className="bg-clip-text bg-gradient-to-r from-[#61F4DE] to-[#6E78FF] text-transparent font-bold font-main text-7xl tracking-wider">
          Andrei Spatariu
        </h1>
        <p className="font-handwriting text-5xl">Full-stack Web Developer</p>
      </div>
    </div>
  );
}

export default Splash;
