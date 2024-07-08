import { Dispatch, SetStateAction } from "react";

export interface ThemeSelectorOptionProps {
  materialIcon: string;
  label: string;
  currentTheme: string;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}

export interface ThemeSelectorProps {
  isNavbarExpanded: boolean;
}