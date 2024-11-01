import { useLocation } from "react-router-dom";

export const usePathname = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return pathname;
};
