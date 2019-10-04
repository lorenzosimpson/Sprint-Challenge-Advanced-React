import React from 'react';

const ToggleBar = (props) => {
    return (
        <div className='dark-mode-toggle' onClick={props.toggle}>
            <div className={props.darkMode ? 'toggle toggled' : 'toggle'}></div>
        </div>
    )
}

export default ToggleBar;