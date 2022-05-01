import React, { ReactElement } from "react";
import SocialIcon from "./SocialIcon";
import { github, linkedin, email } from "../../static/socialIcons";

function Footer(): ReactElement {
  return (
    <footer className="flex min-w-full items-center justify-center p-5">
      <div className="space-y-3 text-center text-white">
        <h1 className="font-handwriting text-4xl">Follow me elsewhere</h1>
        <div className="flex items-center justify-evenly pb-2">
          <SocialIcon
            link="https://github.com/Andros415"
            imageSrc={github}
            altName="GitHub Icon"
          />
          <SocialIcon
            link="https://www.linkedin.com/in/andrei-s/"
            imageSrc={linkedin}
            altName="LinkedIn Icon"
          />
          <SocialIcon
            link="mailto:andrei.spatariu4@gmail.com"
            imageSrc={email}
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
            className="transition-colors duration-200 hover:text-teal"
          >
            Icons8
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://devicon.dev/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-teal"
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
