import { useContext } from "react";
import { GeoContext } from "./GeoContext";

export function useGeo() {
  const context = useContext(GeoContext);
  if (!context) {
    console.warn("Missing zone provider");
  }
  const { geo, setGeo } = context;

  return { geo, setGeo };
}
