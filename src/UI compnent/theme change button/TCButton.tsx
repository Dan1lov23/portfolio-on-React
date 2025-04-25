import './tcbutton.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function TCButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.documentElement.classList.toggle('dark-theme');
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    };

    return (
        <div className="tcbutton" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        </div>
    );
}