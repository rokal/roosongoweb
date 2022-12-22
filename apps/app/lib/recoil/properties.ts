import { atom } from "recoil";
import { Property } from "../types/property";

export const PropertiesState = atom<Property[]>({
  key: "PropertiesState",
  default: [],
});

export const PropertyCountState = atom<number>({
  key: "PropertyCountState",
  default: 0,
});

export const CurrentPropertyState = atom<Property | null>({
  key: "CurrentPropertyState",
  default: null,
});
