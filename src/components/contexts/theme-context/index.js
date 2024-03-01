import { createContext, useEffect, useState } from "react"

const themes = {
    light: {
        name: 'Dark',
        color: 'hsl(200, 15%, 8%)',
        background: ' hsl(0, 0%, 98%)',
        inputText: 'hsl(0, 0%, 52%)',
        elements: 'hsl(0, 0%, 100%)',

    },
    dark: {
        name: 'Light',
        color: 'hsl(0, 0%, 100%)',
        background: 'hsl(207, 26%, 17%)',
        inputText: 'hsl(0, 0%, 52%)',
        elements: 'hsl(209, 23%, 22%)',
    }
}

const ThemeContext = createContext({})

const getThemeFromLocalStore = () => {
    const theme = JSON.parse(localStorage.getItem('theme'))
    return theme
}

const saveThemeToLocalStore = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme))
}

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(getThemeFromLocalStore)

    saveThemeToLocalStore(theme)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider, themes }