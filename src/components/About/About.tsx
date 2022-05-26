import React, { ReactElement } from "react";
import profilePic from "../../static/aboutPic.jpg";

function About(): ReactElement {
  return (
    <div
      className="flex min-h-screen min-w-full scroll-mt-12 items-center justify-evenly"
      id="About"
    >
      <div className="hidden -rotate-3 drop-shadow-lg transition hover:rotate-0 hover:scale-105 lg:block">
        <img
          className="h-96 w-80 rounded-3xl"
          src={profilePic}
          alt="Andrei Spatariu"
        />
      </div>
      <div className="mb-6 max-w-mobile font-main text-slate-800 dark:text-white md:max-w-prose">
        <h1 className="text-center text-5xl font-bold tracking-wider">About</h1>
        <div className="mt-4 space-y-5 text-xl">
          <p>Hey there!</p>
          <p>
            I'm a software engineer who loves building user-focused experiences
            on the web and digging through the data to uncover insights for
            future improvements. It's this passion for discovery that also
            drives me to continuously evolve my skill set - whether that be
            through learning a new language, framework, or tool.
          </p>
          <p>
            Outside of work, I enjoy listening to music 🎵, playing video games
            🎮, traveling &#128747;, and watching/playing tennis 🎾.
          </p>
          <p>
            Feel free to check out what I'm&nbsp;
            <span className="bg-gradient-to-r from-violet-500 to-rose-600 bg-clip-text font-bold text-transparent dark:from-[#61F4DE] dark:to-[#1fddff]">
              currently delving into
            </span>
            , or
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text font-bold text-transparent dark:from-[#ff7170] dark:to-[#ffe57f]">
              &nbsp;my latest projects&nbsp;
            </span>
            down below.
          </p>
          <p className="font-handwriting text-4xl tracking-wider">
            &mdash; Andrei
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
