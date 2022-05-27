import React, { Dispatch, ReactElement } from "react";
import { Listbox, Transition } from "@headlessui/react";

interface SkillRowSelectorProps {
  selectedSkillSet: string;
  onSelectSkillSet: Dispatch<string>;
}

const SkillSetOptions = [
  "Languages & Tools I'm delving into",
  "What I use on a daily basis",
  "Other Languages & Tools I'm skilled in",
];

function SkillRowSelector({
  selectedSkillSet,
  onSelectSkillSet,
}: SkillRowSelectorProps): ReactElement {
  return (
    <Listbox value={selectedSkillSet} onChange={onSelectSkillSet}>
      <div className="relative mx-auto max-w-mobile sm:max-w-md lg:max-w-xl">
        <Listbox.Button className="my-8 rounded-lg bg-black/10 p-4  font-handwriting text-4xl leading-[3.2rem] transition-colors hover:bg-black/20 dark:bg-black/30 dark:hover:bg-black/40">
          {selectedSkillSet}
          <span className="material-icons-outlined pl-1 align-middle text-4xl">
            expand_more
          </span>
        </Listbox.Button>
        <Transition
          enter="transition duration-100"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-100"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute z-10 -mt-4 space-y-3 rounded-lg bg-stone-200/90 px-4 py-5 font-handwriting text-3xl shadow-md backdrop-blur-sm dark:bg-slate-900/90 lg:left-6 lg:w-11/12">
            {SkillSetOptions.map((option) => (
              <Listbox.Option
                className={({ active, selected }) =>
                  `p-1 transition-colors ${
                    active
                      ? "cursor-pointer rounded-lg bg-black/5 text-teal dark:bg-white/5"
                      : ""
                  } ${
                    selected
                      ? "cursor-not-allowed text-gray-400 dark:text-gray-500"
                      : ""
                  }`
                }
                key={option}
                value={option}
                disabled={option === selectedSkillSet}
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default SkillRowSelector;
