import React from 'react';

const Card = props => {
    


    return (
        <div className={`card ${props.country.toLowerCase()}`}>
            <h1>{props.name}</h1>
            <h4>{props.country}</h4>
        </div>
    )
}

export default Card;

// <div className={
//             props.country === 'France' ? 'card france'
//             : props.country === 'Brazil' ? 'card selected'
//             : 'card'}></div>