// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check localStorage for auth state and user details
        const auth = localStorage.getItem('isAuth');
        const userData = localStorage.getItem('user');
        if (auth && userData) {
            setIsAuth(JSON.parse(auth));
            setUser(JSON.parse(userData));
        }
    }, []);

    const setAuth = (value, userData = null) => {
        setIsAuth(value);
        localStorage.setItem('isAuth', JSON.stringify(value));
        if (userData) {
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
        } else if (!value) {
            localStorage.removeItem('user');
            setUser(null);
        }
    };

    const signOut = () => {
        setIsAuth(false);
        setUser(null);
        localStorage.removeItem('isAuth');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isAuth, user, setAuth, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
