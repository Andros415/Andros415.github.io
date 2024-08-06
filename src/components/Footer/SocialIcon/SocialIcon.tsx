import React, { ReactElement } from "react";
import { SocialIconProps } from "./SocialIcon.interface";

const SocialIcon = ({
  link,
  imageSrc,
  altName,
}: SocialIconProps): ReactElement => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="transition hover:scale-110"
    >
      <img src={imageSrc} alt={altName} />
    </a>
  );
};

export default SocialIcon;
