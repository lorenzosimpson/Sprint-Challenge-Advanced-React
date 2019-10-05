import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import ToggleBar from './ToggleBar';

const Header = () => {
    const [darkMode, setDarkMode ] = useDarkMode();
    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    return (
        <div className='header'>
            <h1 data-testid='header-text'>Women's World Cup Players <span role='img' aria-label='globe'>🌍</span></h1>
            <ToggleBar toggle={toggle} darkMode={darkMode}/>
            
        </div>
    )
}

export default Header;