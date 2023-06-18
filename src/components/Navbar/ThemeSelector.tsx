import React, {
  Dispatch,
  Fragment,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { Menu, Transition } from "@headlessui/react";
import { ThemeContext } from "../ThemeProvider";

interface ThemeSelectorOptionProps {
  materialIcon: string;
  label: string;
  currentTheme: string;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}

interface ThemeSelectorProps {
  isNavbarExpanded: boolean;
}

const ThemeSelectorOption = ({
  materialIcon,
  label,
  currentTheme,
  setCurrentTheme,
}: ThemeSelectorOptionProps): ReactElement => {
  const isActiveTheme = currentTheme === materialIcon;
  return (
    <Menu.Item disabled={isActiveTheme}>
      <button
        className={`${
          isActiveTheme
            ? "cursor-not-allowed text-stone-400 dark:text-gray-500"
            : "transition-colors hover:text-teal"
        } flex items-center justify-start gap-4 align-middle`}
        onClick={() => setCurrentTheme(materialIcon)}
      >
        <span className="material-icons-outlined">{materialIcon}</span>
        {label}
      </button>
    </Menu.Item>
  );
};

const ThemeSelector = ({
  isNavbarExpanded,
}: ThemeSelectorProps): ReactElement => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (!("theme" in localStorage)) {
      setCurrentTheme("laptop");
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    } else {
      if (localStorage.getItem("theme") === "dark_mode") {
        setCurrentTheme("dark_mode");
        document.documentElement.classList.add("dark");
      } else {
        setCurrentTheme("light_mode");
        document.documentElement.classList.remove("dark");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    currentTheme === "laptop"
      ? localStorage.removeItem("theme")
      : localStorage.setItem("theme", currentTheme);
    if (
      currentTheme === "dark_mode" ||
      (currentTheme === "laptop" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme]);

  return (
    <Menu>
      <Menu.Button
        className="material-icons-outlined text-3xl text-slate-800 transition-colors hover:cursor-pointer hover:text-teal dark:text-white dark:hover:text-teal"
        disabled={isNavbarExpanded}
      >
        {currentTheme}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-2 top-20 z-20 flex flex-col space-y-4 rounded-lg bg-lightBase/95 p-5 shadow-md backdrop-blur-sm dark:bg-slate-800/90 md:dark:bg-slate-900/90 xl:right-[3%] 2xl:right-[6%]">
          <ThemeSelectorOption
            materialIcon="light_mode"
            label="Light"
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
          <ThemeSelectorOption
            materialIcon="dark_mode"
            label="Dark"
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
          <ThemeSelectorOption
            materialIcon="laptop"
            label="System"
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ThemeSelector;
