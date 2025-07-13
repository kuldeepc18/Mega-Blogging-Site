import React, { createContext, useState, useEffect } from 'react';

// Create context with default values
export const ThemeContext = createContext({
    isDarkMode: false,
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check if we're in a browser environment
        if (typeof window !== 'undefined') {
            // Check localStorage for saved preference
            const saved = localStorage.getItem('darkMode');
            if (saved !== null) {
                try {
                    return JSON.parse(saved);
                } catch (error) {
                    console.warn('Failed to parse darkMode from localStorage:', error);
                }
            }
            // Check system preference
            if (window.matchMedia) {
                return window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
        }
        // Default to light mode
        return false;
    });

    useEffect(() => {
        // Only run in browser environment
        if (typeof window !== 'undefined') {
            // Save preference to localStorage
            try {
                localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
            } catch (error) {
                console.warn('Failed to save darkMode to localStorage:', error);
            }

            // Apply theme to document
            const root = document.documentElement;
            if (isDarkMode) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const value = {
        isDarkMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}; 