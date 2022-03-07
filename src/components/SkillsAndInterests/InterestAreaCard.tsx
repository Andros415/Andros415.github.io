import React, { ReactElement } from "react";

function InterestAreaCard(): ReactElement {
  return (
    <div className="max-w-mobile space-y-4 rounded-lg border border-slate-500/50 bg-slate-500/50 p-4 font-main shadow-md backdrop-blur-sm sm:max-w-md">
      <span className="material-icons-outlined text-[7rem]">web</span>
      <h3 className="text-3xl">Web Development</h3>
      <p className="max-w-prose text-lg">
        We did most of the heavy lifting for you to provide a default stylings
        that incorporate our custom components. Additionally, we refined
        animations and transitions to provide a smoother experience for
        developers.
      </p>
    </div>
  );
}

export default InterestAreaCard;
