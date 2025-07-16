import { useState } from "react";
import MainUserContext from "./MainUserContext";

export default function MainUserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const login = (userData) => {
        setUser(userData);
        setIsAuth(true);
    }

    const logout = () => {
        setUser(null);
        setIsAuth(false);
        localStorage.removeItem('token');
    }

    const value = {
        user,
        setUser,
        isAuth,
        setIsAuth,
        login,
        logout
    }

    return (
        <MainUserContext.Provider value={value}>
            {children}
        </MainUserContext.Provider>
    );
}