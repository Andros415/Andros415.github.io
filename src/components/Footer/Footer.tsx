import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import SocialIcon from "./SocialIcon";
import {
  github,
  githubDark,
  linkedin,
  linkedinDark,
  email,
  emailDark,
} from "../../static/socialIcons";

function Footer(): ReactElement {
  const { currentTheme } = useContext(ThemeContext);
  const isDarkTheme =
    currentTheme === "dark_mode" ||
    (currentTheme === "laptop" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  return (
    <footer className="flex min-w-full items-center justify-center p-5">
      <div className="space-y-3 text-center text-slate-800 dark:text-white">
        <h1 className="font-handwriting text-4xl">Follow me elsewhere</h1>
        <div className="flex items-center justify-evenly pb-2">
          <SocialIcon
            link="https://github.com/Andros415"
            imageSrc={isDarkTheme ? github : githubDark}
            altName="GitHub Icon"
          />
          <SocialIcon
            link="https://www.linkedin.com/in/andrei-s/"
            imageSrc={isDarkTheme ? linkedin : linkedinDark}
            altName="LinkedIn Icon"
          />
          <SocialIcon
            link="mailto:andrei.spatariu4+web@gmail.com"
            imageSrc={isDarkTheme ? email : emailDark}
            altName="Email Icon"
          />
        </div>
        <small className="font-main">
          Website created using <i className="devicon-react-original"></i> and
          &nbsp;<i className="devicon-tailwindcss-plain"></i>. Icons provided
          by&nbsp;
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-emerald-500 dark:hover:text-teal"
          >
            Icons8
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://devicon.dev/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-emerald-500 dark:hover:text-teal"
          >
            Devicon
          </a>
          .
        </small>
      </div>
    </footer>
  );
}

export default Footer;
