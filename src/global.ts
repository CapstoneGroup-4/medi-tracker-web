import { atom } from "jotai";
import { SignInResponse } from "./api/models/User";

const GlobalUserAtom = atom<SignInResponse | null>(null);
export { GlobalUserAtom };
