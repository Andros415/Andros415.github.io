import React, { ReactElement, useEffect } from "react";

function FloatingActionButton(): ReactElement {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const FAB = document.querySelector("#FAB");
      if (window.scrollY > 350) {
        FAB?.classList.remove("opacity-0");
      } else {
        FAB?.classList.add("opacity-0");
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
        className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-teal hover:bg-[#5fbeb2]"
        onClick={() => window.scrollTo(0, 0)}
      >
        <span className="material-icons-outlined text-3xl text-white">
          expand_less
        </span>
      </button>
    </div>
  );
}

export default FloatingActionButton;
