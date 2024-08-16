import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = React.useState(false)

    const ToggleTheme = () => {
        setTheme(!theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
