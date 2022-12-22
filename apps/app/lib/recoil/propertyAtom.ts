import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { Property } from "../types/property";

export const propertyAtom = atom<Property | null>({
  key: "propertyAtom",
  default: undefined,
});

export const useSetProperty = () => {
  const setProperty = useSetRecoilState(propertyAtom);
  return setProperty;
};

export const useProperty = () => {
  const property = useRecoilValue(propertyAtom);
  return property;
};
