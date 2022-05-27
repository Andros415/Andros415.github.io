import React, { ReactElement } from "react";

interface SocialIconProps {
  link: string;
  imageSrc: string;
  altName: string;
}

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
