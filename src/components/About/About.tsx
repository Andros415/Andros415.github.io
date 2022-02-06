import React, { ReactElement } from "react";
import profilePic from "../../static/aboutPic.jpg";

function About(): ReactElement {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-evenly">
      <div className="hidden lg:block">
        <img
          className="h-96 w-80 rounded-3xl"
          src={profilePic}
          alt="Andrei Spatariu"
        />
      </div>
      <div className="max-w-mobile font-main text-white sm:max-w-prose">
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
            🎮, and watching/playing tennis 🎾.
          </p>
          <p>
            Feel free to check out what I'm currently delving into, or my latest
            projects down below.
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
