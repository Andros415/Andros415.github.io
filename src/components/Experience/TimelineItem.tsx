import React, { ReactElement } from "react";

interface TimelineItemProps {
  gridPositionClasses?: string;
  company: string;
  position: string;
  isCurrentJob?: boolean;
  startYear: string;
  endYear?: string;
}

function TimelineItem({
  gridPositionClasses,
  company,
  position,
  isCurrentJob = false,
  startYear,
  endYear,
}: TimelineItemProps): ReactElement {
  const yearString = endYear
    ? `${startYear} ~ ${endYear}`
    : `${startYear} ${isCurrentJob ? "~" : ""} `;

  return (
    <div
      className={`rounded-lg border border-slate-500/20 dark:border-slate-500/50 bg-stone-200/50 dark:bg-slate-500/50 p-4 font-main text-slate-800 dark:text-white shadow-md backdrop-blur-sm ${
        gridPositionClasses ? gridPositionClasses : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mr-4">
          <p className="text-lg">{company}</p>
          <p>{position}</p>
        </div>
        <div>
          <p className="text-right text-xl md:text-2xl">{yearString}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
