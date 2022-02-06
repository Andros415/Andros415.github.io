import React, { ReactElement } from "react";

function Splash(): ReactElement {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div className="space-y-7 text-center text-white">
        <h1 className="bg-gradient-to-r from-[#61F4DE] to-[#64ACFF] bg-clip-text font-main text-7xl font-bold tracking-wider text-transparent">
          Andrei Spatariu
        </h1>
        <p className="font-handwriting text-5xl">Full-stack Web Developer</p>
      </div>
    </div>
  );
}

export default Splash;
