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
        className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-teal hover:bg-[#5fbeb2] disabled:cursor-default"
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
