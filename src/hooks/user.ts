import { useAtomValue } from "jotai";
import { GlobalUserAtom } from "@/global";
export const useIsDoctor = () => {
  const user = useAtomValue(GlobalUserAtom);
  return user?.roles.some((role) => role.role === "DOCTOR");
};

export const useDoctorId = () => {
  const user = useAtomValue(GlobalUserAtom);
  return user?.roles.find((role) => role.role === "DOCTOR")?.id;
};
