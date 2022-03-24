import React, { ReactElement, useState } from "react";

interface InterestAreaCardProps {
  icon: string;
  title: string;
  description: string;
}

function InterestAreaCard({
  icon,
  title,
  description,
}: InterestAreaCardProps): ReactElement {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  return (
    <div
      className={`relative w-mobile rounded-lg border border-slate-500/50 bg-slate-500/50 p-4 font-main shadow-md 
      backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:cursor-pointer hover:shadow-xl hover:shadow-sky-200/10 sm:h-72 sm:max-w-md sm:hover:-skew-y-1 
      ${isCardFlipped ? "-scale-x-100" : ""}`}
      onClick={() => setIsCardFlipped(!isCardFlipped)}
    >
      {!isCardFlipped ? (
        <>
          <span className="material-icons-outlined absolute top-2 right-2 text-slate-400/50 sm:hidden">
            touch_app
          </span>
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <span className="material-icons-outlined text-[7rem]">{icon}</span>
            <h3 className="text-3xl">{title}</h3>
          </div>
        </>
      ) : (
        <p className="max-w-prose -scale-x-100 text-left text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default InterestAreaCard;
