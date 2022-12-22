import React, { ReactNode } from "react";
import { ScriptContext } from "./ScriptContext";

interface Props {
  loaded: boolean;
  children?: ReactNode;
}
export const ScriptProvider = ({ children, loaded }: Props) => {
  return (
    <ScriptContext.Provider value={{ loaded }}>
      {children}
    </ScriptContext.Provider>
  );
};
