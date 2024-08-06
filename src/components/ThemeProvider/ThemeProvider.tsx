import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { IThemeContext } from "./ThemeProvider.interface";

const ThemeContext = createContext({} as IThemeContext);

function ThemeProvider({
  children,
}: PropsWithChildren<ReactNode>): ReactElement {
  const [currentTheme, setCurrentTheme] = useState("dark_mode");

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
