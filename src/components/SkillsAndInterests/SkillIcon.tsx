import React, { ReactElement } from "react";

interface SkillIconProps {
  name: string;
  type: "plain" | "original" | "plain-wordmark" | "original-wordmark";
  size?: string;
  caption?: string;
  isColored?: boolean;
}

function SkillIcon({
  name,
  type,
  size,
  caption,
  isColored = false,
}: SkillIconProps): ReactElement {
  return (
    <div
      className={`group transition duration-300 sm:hover:scale-110 ${
        size ? "flex w-32 flex-col justify-evenly" : ""
      }`}
    >
      <i
        className={`devicon-${name.toLowerCase()}-${type} ${
          isColored ? "colored" : ""
        }`}
        style={{ fontSize: size }}
      />
      {caption && (
        <p className="pointer-events-none font-main text-lg transition group-hover:opacity-100 sm:opacity-0">
          {caption}
        </p>
      )}
    </div>
  );
}

export default SkillIcon;
