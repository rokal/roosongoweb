import { useContext } from "react";
import { ScriptContext } from "./ScriptContext";

export function useScript() {
  const context = useContext(ScriptContext);
  if (!context) {
    console.warn("Missing context for script");
  }
  const { loaded } = context;

  return loaded;
}
