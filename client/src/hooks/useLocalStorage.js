import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => { //key retrieves value from localStorage
    // Set state:
    const [storedValue, setStoredValue] = useState(() => {
        //set item to item corresponding to key: 
        const item = window.localStorage.getItem(key);
        //if we get the item, parse it. else return the initialValue
        return item ? JSON.parse(item) : initialValue;
    })

    // Setter function: 
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}