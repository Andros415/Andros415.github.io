import React, { ReactElement, useEffect, useState } from "react";

function FloatingActionButton(): ReactElement {
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const FAB = document.querySelector("#FAB");
      if (window.scrollY > 350) {
        FAB?.classList.remove("opacity-0");
        setDisabled(false);
      } else {
        FAB?.classList.add("opacity-0");
        setDisabled(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className="fixed right-5 bottom-5 z-10 opacity-0 transition-opacity duration-300"
      id="FAB"
    >
      <button
        className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-emerald-400 drop-shadow-lg transition-colors hover:bg-emerald-500 disabled:cursor-default dark:bg-teal dark:hover:bg-[#47a89b]"
        onClick={() => window.scrollY > 350 && window.scrollTo(0, 0)}
        disabled={isDisabled}
      >
        <span className="material-icons-outlined text-3xl text-white">
          expand_less
        </span>
      </button>
    </div>
  );
}

export default FloatingActionButton;
