import React, { createContext, useState , useEffect } from 'react';

export const ThemeProvider = createContext();

export const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); 
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    return (
        <ThemeProvider.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeProvider.Provider>
    );
};
