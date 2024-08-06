import { Dispatch, SetStateAction } from "react";

export interface IThemeContext {
  currentTheme: string;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}