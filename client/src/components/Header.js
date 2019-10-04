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
            <button onClick={toggle}>Dark Mode</button>
        </div>
    )
}

export default Header;