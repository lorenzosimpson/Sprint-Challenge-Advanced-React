import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
    const [darkMode, setDarkMode ] = useDarkMode();
    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    return (
        <div className='header'>
            <h1>Women's World Cup Players</h1>
            <div className='dark-mode-toggle'>
            <div className={darkMode ? 'toggle toggled' : 'toggle'} onClick={toggle}></div>
            </div>
            
        </div>
    )
}

export default Header;