import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const SavedDestinationContext = createContext();

export function SavedDestinationProvider({ children }) {
    const [savedDestination, setSavedDestination] = useState([])
    const { currentUser } = useAuth();

    if (!currentUser) {
        setSavedDestination([]);
        return
    }
    useEffect(() => {

        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        const key = `savedDestination_${currentUser?.email}`
        const saved = JSON.parse(localStorage.getItem(key)) || []
        setSavedDestination(saved);

    }, [currentUser]);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        const key = `savedDestination_${currentUser?.email}`
        localStorage.setItem(key, JSON.stringify(savedDestination))
    }, [savedDestination])

    const saveDestinations = (destination) => {
        const alreadySaved = savedDestination.some(
            (item) => item.id === destination.id
        );
        if (!alreadySaved) {
            setSavedDestination([...savedDestination, destination])
        }
    }

    const removeDestination = (id) => {
        setSavedDestination(
            savedDestination.filter(
                (item) => item.id != id
            )
        )
    }

    return (
        <SavedDestinationContext.Provider
            value={{
                savedDestination,
                saveDestinations,
                removeDestination
            }}
        >
            {children}
        </SavedDestinationContext.Provider>
    )
}

export const useSavedDestination = () => {
    return useContext(SavedDestinationContext)
}

