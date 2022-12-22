import { atom } from "recoil";

export const MinPriceState = atom<number>({
  key: "MinPriceState",
  default: 0,
});
