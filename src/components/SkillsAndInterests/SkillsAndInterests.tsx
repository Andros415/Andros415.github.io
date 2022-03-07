import React, { ReactElement } from "react";
import InterestAreaCard from "./InterestAreaCard";

function SkillsAndInterests(): ReactElement {
  return (
    <div
      className="min-h-screen min-w-full scroll-mt-20 text-center text-white"
      id="SkillsAndInterests"
    >
      <h1 className="font-main text-5xl font-bold tracking-wider">
        Skills & Interests
      </h1>
      <h2 className="mx-auto my-8 max-w-mobile font-handwriting text-4xl">
        Areas that pique my interest
      </h2>
      <div className="mb-8 flex flex-col items-center justify-evenly gap-8 sm:basis-1/3 sm:flex-row sm:flex-wrap">
        <InterestAreaCard />
        <InterestAreaCard />
        <InterestAreaCard />
      </div>
    </div>
  );
}

export default SkillsAndInterests;
