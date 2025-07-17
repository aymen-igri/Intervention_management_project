import { useState } from "react";
import MainUserContext from "./MainUserContext";

export default function MainUserProvider({ children }) {
    const [user, setRawUser] = useState(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    });
    const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem('user'));

    const setUser = (userData) => {
        setRawUser(userData);
        setIsAuth(!!userData);
        if (userData) localStorage.setItem('user', JSON.stringify(userData));
        else localStorage.removeItem('user');
    };
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