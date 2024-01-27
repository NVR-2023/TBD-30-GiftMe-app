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

type DarkmodeType = {
  darkmode: boolean;
  setDarkmode: Dispatch<SetStateAction<boolean>>;
};

const darknodeContext = createContext<DarkmodeType | undefined>(undefined);

type DarkmodeWrapperProps = {
  children: ReactNode;
};

export const DarkmodeWrapper: FC<DarkmodeWrapperProps> = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <darknodeContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </darknodeContext.Provider>
  );
};

export const useDarkmodeContext = (): DarkmodeType => {
  const context = useContext(darknodeContext);

  if (!context) {
    throw new Error("useDarkmodeContext must be used within a DarkmodeWrapper");
  }

  return context;
};
