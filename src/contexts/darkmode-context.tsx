"use client";

import React, {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type DarkModeType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const darkModeContext = createContext<DarkModeType | undefined>(undefined);

type DarkModeWrapperProps = {
  children: ReactNode;
};

export const DarkModeWrapper: FC<DarkModeWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <darkModeContext.Provider value={{ darkMode: darkMode, setDarkMode: setDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};

export const useDarkModeContext = (): DarkModeType => {
  const context = useContext(darkModeContext);

  if (!context) {
    throw new Error("useDarkModeContext must be used within a DarkmodeWrapper");
  }

  return context;
};
