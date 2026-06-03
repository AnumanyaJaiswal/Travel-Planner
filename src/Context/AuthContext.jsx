import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("currentUser"))
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)

    const login = (user) => {
        setIsAuthenticated(true)
        setCurrentUser(user)

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        )
    }
    const logout = () => {
        setIsAuthenticated(false)
        setCurrentUser(null)

        localStorage.removeItem("currentUser")
    }

    return (
        <AuthContext.Provider
            value={{
                setCurrentUser,
                currentUser,
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

