import { useContext } from "react";
import MainUserContext from "./MainUserContext";

export function useMainUser() {
    const context = useContext(MainUserContext);
    if (!context) {
        throw new Error('useMainUser must be used within a MainUserProvider');
    }
    return context;
}