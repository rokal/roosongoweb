import React, { ReactNode, useState } from "react";
import { Geo } from "types/geo";
import { GeoContext } from "./GeoContext";

interface Props {
  geo: Geo;
  children?: ReactNode;
}
export const GeoProvider = ({ children, geo: initialGeo }: Props) => {
  const [geo, setGeo] = useState<Geo>(initialGeo);

  return (
    <GeoContext.Provider value={{ geo, setGeo }}>
      {children}
    </GeoContext.Provider>
  );
};
