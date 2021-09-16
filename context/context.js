import { createContext } from "react";

export const LanguageDirectionContext = createContext({
    direction: "ltr",
    setDirection: (dire)=>{ }
  });