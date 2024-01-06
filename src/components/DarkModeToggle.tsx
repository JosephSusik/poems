import { ThemeContext, themes } from "../context/ThemeContext";
import "./styles/DarkModeToggle.css"

function DarkModeToggle() {
   
    return(
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <div className="dark-mode-toggle">
                        <button id="dark-mode-button"
                            onClick={() => changeTheme(themes.dark)}
                        >Tmavý</button> 
                        
                        <p>|</p>
                        
                        <button id="light-mode-button"
                            onClick={() => changeTheme(themes.light)}
                        >Světlý</button>
                    </div>
                )}
            </ThemeContext.Consumer>
    );
}

export default DarkModeToggle;