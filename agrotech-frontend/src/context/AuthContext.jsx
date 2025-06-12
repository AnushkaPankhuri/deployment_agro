// import { createContext, useContext, useState } from 'react';
//
// const AuthContext = createContext();
//
// export const useAuth = () => useContext(AuthContext);
//
// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//
//     const login = (userData) => setUser(userData);
//     const logout = () => setUser(null);
//
//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

// This is the hook you use in your components to get auth info and methods
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (username, password, role) => {
        try {
            const response = await api.post('/api/auth/login', {
                username,
                password,
                role,
            });

            // Create Basic Auth token for later API calls
            const token = btoa(`${username}:${password}`);

            // Store user info plus token and raw credentials for auth header
            setUser({
                ...response.data,
                username,
                password,
                token,
            });

            setIsAuthenticated(true);
        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


