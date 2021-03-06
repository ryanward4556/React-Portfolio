import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import './style.scss';


const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <div className="dark-mode-toggle">
            <button type="button" className="toggle-buttons" onClick={darkMode.disable}>
                ☀
        </button>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            <button type="button" className="toggle-buttons" onClick={darkMode.enable}>
                ☾
        </button>
        </div>
    );
};

export default DarkModeToggle;
