import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    // set darkMode state:
    const [darkMode, setDarkMode] = useLocalStorage('dark mode', false)

    // toggle the darkMode class on the body tag 
    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode])
    return [darkMode, setDarkMode]
}