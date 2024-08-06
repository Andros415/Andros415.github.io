import React, { ReactElement } from "react";
import SkillIcon from "../../SkillsAndInterests/SkillIcon";
import useLanguageData from "./use.language.data";
import { LanguageRowProps } from "./LanguageRow.interface";

function LanguageRow({ languageURL }: LanguageRowProps): ReactElement {
  const { languagePercentData, matchIconType, matchLanguageName } =
    useLanguageData({
      languageURL,
    });

  return (
    <div className="flex h-[184px] flex-wrap content-center justify-evenly text-center">
      {Object.keys(languagePercentData).map((language) => (
        <SkillIcon
          key={language}
          size={`${languagePercentData[language].iconSize?.toFixed(2)}rem`}
          name={matchLanguageName(language)}
          type={matchIconType(language)}
          caption={`${language} - ${languagePercentData[
            language
          ].percentage?.toFixed(2)}%`}
        />
      ))}
    </div>
  );
}

export default LanguageRow;
