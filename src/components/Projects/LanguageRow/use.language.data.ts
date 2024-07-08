import { useEffect, useState } from "react";
import { LanguageRowProps, useLanguageDataReturn, LanguagePercentSizeObj, LanguageReturn, IconType } from "./LanguageRow.interface";

const useLanguageData = ({
  languageURL,
}: LanguageRowProps): useLanguageDataReturn => {
  const [languagePercentData, setLanguagePercentData] =
    useState<LanguagePercentSizeObj>({});

  const getLanguages = async (languageURL: string) => {
    const languageRes = await fetch(languageURL);
    const languageData: LanguageReturn = await languageRes.json();
    let languagesPercent = { ...languageData };
    const total = Object.values(languageData).reduce(
      (acc, curr) => acc + curr,
      0
    );
    Object.keys(languageData).map((language) => {
      return (languagesPercent[language] =
        (languageData[language] / total) * 100);
    });
    languagesPercent =
      Object.keys(languagesPercent).length === 0
        ? { Markdown: 100 }
        : languagesPercent;
    getLanguageIconSize(languagesPercent);
  };

  const getLanguageIconSize = (languagePercentObj: LanguageReturn): void => {
    const languagePercentSize: LanguagePercentSizeObj = {};
    Object.keys(languagePercentObj).map((language) => {
      let size = (languagePercentObj[language] / 100) * 8;
      size = size < 1 ? 1 : size;
      return (languagePercentSize[language] = {
        iconSize: size,
        percentage: languagePercentObj[language],
      });
    });
    setLanguagePercentData(languagePercentSize);
  };

  const matchIconType = (language: string): IconType => {
    switch (language) {
      case "CSS":
      case "HTML":
        return "plain-wordmark";
      case "Go":
        return "original-wordmark";
      case "Markdown":
      case "Sass":
        return "original";
      case "JavaScript":
      case "Java":
      case "Python":
      case "Dart":
      case "Kotlin":
      case "R":
      case "TypeScript":
      default:
        return "plain";
    }
  };

  const matchLanguageName = (language: string): string => {
    switch (language) {
      case "CSS":
        return "CSS3";
      case "HTML":
        return "HTML5";
      default:
        return language;
    }
  };

  useEffect(() => {
    getLanguages(languageURL).catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { languagePercentData, matchIconType, matchLanguageName };
};

export default useLanguageData;
