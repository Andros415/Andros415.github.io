import React, { ReactElement } from "react";
import SocialIcons from "./SocialIcons";
import { github, linkedin, email } from "../../static/socialIcons";

function Footer(): ReactElement {
  return (
    <footer className="min-w-full flex items-center justify-center pb-5">
      <div className="text-white text-center space-y-3">
        <h3 className="font-handwriting text-4xl">Follow me elsewhere</h3>
        <div className="flex items-center justify-evenly pb-2">
          <SocialIcons
            link="https://github.com/Andros415"
            imageSrc={github}
            altName="GitHub Icon"
          />
          <SocialIcons
            link="https://www.linkedin.com/in/andrei-s/"
            imageSrc={linkedin}
            altName="LinkedIn Icon"
          />
          <SocialIcons
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
            className="hover:opacity-80 transition-opacity"
          >
            Icons8
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://devicon.dev/"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
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
