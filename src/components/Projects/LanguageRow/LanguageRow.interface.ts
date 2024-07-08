export interface LanguageRowProps {
  languageURL: string;
}

export type LanguageReturn = {
  [key: string]: number;
};

export type LanguagePercentSizeObj = {
  [key: string]: { iconSize: number; percentage: number };
};

export type IconType = "plain" | "original" | "plain-wordmark" | "original-wordmark";


export interface useLanguageDataReturn {
  languagePercentData: LanguagePercentSizeObj;
  matchIconType: (language: string) => IconType;
  matchLanguageName: (language: string) => string;
}

