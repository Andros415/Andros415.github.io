import React, { ReactElement } from "react";

interface SocialIconsProps {
  link: string;
  imageSrc: string;
  altName: string;
}

const SocialIcons = ({
  link,
  imageSrc,
  altName,
}: SocialIconsProps): ReactElement => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <img src={imageSrc} alt={altName} />
    </a>
  );
};

export default SocialIcons;
