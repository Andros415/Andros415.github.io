import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IThemeContext {
  currentTheme: string;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}

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
