import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <h1>{props.name}</h1>
            <h4>{props.country}</h4>
        </div>
    )
}

export default Card;