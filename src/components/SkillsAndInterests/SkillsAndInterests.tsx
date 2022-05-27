import React, { ReactElement, useState } from "react";
import InterestAreaCard from "./InterestAreaCard";
import SkillRowSelector from "./SkillRowSelector";
import SkillRow from "./SkillRow";

const InterestsList = [
  {
    icon: "palette",
    title: "UI/UX Design",
    description: `A website or application can have all the right content 
    but presentation/usability is equally as important to the end user. Why should 
    they use your app over another? What steps do they need to go through to accomplish something? 
    That's why I love delving into this area to find techniques to spotting pain points 
    in user flows and to drive valuable iterative improvements.`,
  },
  {
    icon: "web",
    title: "Web Development",
    description: `What intrigues me about web development is not only the creative freedom to build anything
      and using whatever tech stack you so desire, but also the rapid pace of new tools/libraries to
      try out and the continuously changing the toolbox a developer has at their disposal.
      For example, Angular, React, and Vue have been influential in just the past decade.`,
  },

  {
    icon: "insights",
    title: "Machine Learning",
    description: `Nowadays, there's petabytes of data being collected or scraped from the web every day. 
    Similar to how user feedback drives the evolution of UIs, machine learning is a powerful tool to help us 
    to turn this data into smarter, optimized decisions. It's also an area that's constantly evolving and that's 
    why I enjoy delving into it from time to time (plus it's a perfect excuse to use Python again 🐍).`,
  },
];

const DEFAULT_SKILL_SET = "Languages & Tools I'm delving into";

function SkillsAndInterests(): ReactElement {
  const [skillSet, setSkillSet] = useState(DEFAULT_SKILL_SET);
  return (
    <div
      className="min-h-screen min-w-full scroll-mt-28 text-center text-slate-800 dark:text-white"
      id="SkillsAndInterests"
    >
      <h1 className="font-main text-5xl font-bold tracking-wider">
        Skills & Interests
      </h1>
      <SkillRowSelector
        selectedSkillSet={skillSet}
        onSelectSkillSet={setSkillSet}
      />
      <SkillRow selectedSkillSet={skillSet} />
      <h2 className="mx-auto my-8 max-w-mobile font-handwriting text-4xl">
        Areas that pique my interest
      </h2>
      <div className="mb-8 flex flex-col items-center justify-evenly gap-8 sm:basis-1/3 sm:flex-row sm:flex-wrap">
        {InterestsList.map((interest) => (
          <InterestAreaCard
            key={interest.title}
            icon={interest.icon}
            title={interest.title}
            description={interest.description}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsAndInterests;
