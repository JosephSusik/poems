import { createContext } from "react"

const themes = {
    dark: "dark-theme",
    light: "light-theme",
}

const ThemeContext = createContext({
    themes: themes.dark,
    changeTheme: (theme: string) => {},
})

export {themes, ThemeContext};