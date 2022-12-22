import { createContext } from "react";
import { Geo } from "@lib/types/geo";

interface State {
  geo: Geo;
  setGeo: (newGeo: Geo) => void;
}

export const GeoContext = createContext<State>({
  geo: {} as Geo,
  setGeo: () => {},
});
