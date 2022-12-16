import { createContext } from "react";

interface State {
  loaded: boolean;
}

export const ScriptContext = createContext<State>({
  loaded: false,
});
