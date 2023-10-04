import { atomFamily, atom } from "recoil";
import { persistAtomEffect } from "./atoms";

export const isSideBarOpenState = atomFamily({
  key: "isSideBarOpenState",
  default: false,
  effects_UNSTABLE: [persistAtomEffect],
});
