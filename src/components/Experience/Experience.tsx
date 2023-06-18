import React, { ReactElement } from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../static/Resume.pdf";

function Experience(): ReactElement {
  return (
    <div
      className="flex min-h-screen min-w-full scroll-mt-16 flex-col items-center justify-evenly text-slate-800 dark:text-white"
      id="Experience"
    >
      <h1 className="text-center font-main text-5xl font-bold tracking-wider">
        Experience
      </h1>
      <div className="m-4 grid gap-4 md:mx-10 lg:grid-cols-9">
        <TimelineItem
          company="NCR"
          position="Intern"
          startYear="2014"
          gridPositionClasses="col-start-1"
        />
        <TimelineItem
          company="University of Georgia"
          position="Undergraduate Student - Computer Science"
          startYear="2016"
          endYear="2019"
          gridPositionClasses="md:row-start-2 md:col-start-2 md:col-span-3"
        />
        <TimelineItem
          company="University of Georgia"
          position="Teaching Assistant"
          startYear="2018"
          endYear="2019"
          gridPositionClasses="md:row-start-3 md:col-start-3 md:col-span-2"
        />
        <TimelineItem
          company="ADVA"
          position="R&D Intern"
          startYear="2019"
          gridPositionClasses="md:row-start-4 md:col-start-4"
        />
        <TimelineItem
          company="AT&T"
          position="Software Engineer - TDP"
          startYear="2020"
          endYear="2022"
          gridPositionClasses="md:row-start-5 md:col-start-5 md:col-span-3"
        />
        <TimelineItem
          company="Cricket Wireless"
          position="Software Engineer"
          startYear="2022"
          isCurrentJob
          gridPositionClasses="md:row-start-6 md:col-start-7 md:col-span-3"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-center font-handwriting text-4xl">
          For more details...
        </h2>
        <button
          className="rounded-full bg-emerald-400 px-12 py-3 font-main text-xl text-white drop-shadow-lg transition-colors hover:bg-emerald-500 dark:bg-teal dark:hover:bg-teal/80"
          onClick={() => window.open(`${Resume}`, "_blank")}
        >
          View My R&eacute;sum&eacute;
        </button>
      </div>
    </div>
  );
}

export default Experience;
