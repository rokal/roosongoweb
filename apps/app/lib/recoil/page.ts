import { atom, selector } from "recoil";
import { PropertyCountState } from "./properties";
import { PAGE_SIZE } from "../constants";

export const CurrentPageState = atom<number>({
  key: "CurrentPageState",
  default: 1,
});

export const getStartingElement = selector({
  key: "getStartingElement",
  get: ({ get }) => {
    const currentPage = get(CurrentPageState);
    return (currentPage - 1) * PAGE_SIZE + 1;
  },
});

export const getLastElement = selector({
  key: "getLastElement",
  get: ({ get }) => {
    const start = get(getStartingElement);
    const propertiesCount = get(PropertyCountState);
    return Math.min(start + PAGE_SIZE - 1, propertiesCount);
  },
});

export const getTotalPage = selector({
  key: "getTotalPage",
  get: ({ get }) => {
    const propertiesCount = get(PropertyCountState);
    return Math.ceil(propertiesCount / PAGE_SIZE);
  },
});
