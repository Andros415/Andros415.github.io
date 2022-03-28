import React, { ReactElement } from "react";

interface SkillIconProps {
  name: string;
  type: "plain" | "original" | "plain-wordmark" | "original-wordmark";
  caption: string;
  isColored?: boolean;
}

function SkillIcon({
  name,
  type,
  caption,
  isColored = false,
}: SkillIconProps): ReactElement {
  return (
    <div className="group transition duration-300 sm:hover:scale-110">
      <i className={`devicon-${name}-${type} ${isColored ? "colored" : ""}`} />
      <p className="font-main text-lg transition group-hover:opacity-100 sm:opacity-0">
        {caption}
      </p>
    </div>
  );
}

export default SkillIcon;
