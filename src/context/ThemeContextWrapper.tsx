import { useEffect, useState } from "react";
import { themes, ThemeContext } from "./ThemeContext";

function ThemeContextWrapper(props:any) {
    const [theme, setTheme] = useState(() => {
        const theme = localStorage.getItem('theme')
        if (theme === null) return themes.dark
        return theme;
    });

    const changeTheme = (theme: string) => setTheme(theme);

    useEffect(() => {
        localStorage.setItem('theme', theme)
        
        var light = document.getElementById('light-mode-button');
        var dark = document.getElementById('dark-mode-button');
        
        switch(theme) {
            case themes.light:
                document.body.classList.add('light-mode');
                light?.classList.add('active');
                dark?.classList.remove('active');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('light-mode');
                dark?.classList.add('active');
                light?.classList.remove('active');
                break;
        }
    }, [theme])
 
    return(
        <ThemeContext.Provider value={{ themes : theme, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextWrapper;