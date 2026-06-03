import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const SavedDestinationContext = createContext();

export function SavedDestinationProvider({ children }) {
    const [savedDestination, setSavedDestination] = useState([]);
    const { currentUser } = useAuth();

    // Load destinations whenever user changes
    useEffect(() => {
        if (!currentUser) {
            setSavedDestination([]);
            return;
        }

        const key = `savedDestination_${currentUser.email}`;
        const saved =
            JSON.parse(localStorage.getItem(key)) || [];

        setSavedDestination(saved);
    }, [currentUser]);

    // Save destinations for current user
    useEffect(() => {
        if (!currentUser) return;

        const key = `savedDestination_${currentUser.email}`;

        localStorage.setItem(
            key,
            JSON.stringify(savedDestination)
        );
    }, [savedDestination, currentUser]);

    const saveDestinations = (destination) => {
        const alreadySaved = savedDestination.some(
            (item) => item.id === destination.id
        );

        if (!alreadySaved) {
            setSavedDestination([
                ...savedDestination,
                destination
            ]);
        }
    };

    const removeDestination = (id) => {
        setSavedDestination(
            savedDestination.filter(
                (item) => item.id !== id
            )
        );
    };

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
    );
}

export const useSavedDestination = () => {
    return useContext(SavedDestinationContext);
};