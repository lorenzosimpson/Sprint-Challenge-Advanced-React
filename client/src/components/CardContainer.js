import React from 'react';
import Card from './Card'

const CardContainer = props => {
    console.log(props.playersData)
    return (
        <div className='card-container'>
            {props.playersData.map(player => (
                <Card 
                    name={player.name}
                    country={player.country}
                />
            ))}
        </div>
    );
}

export default CardContainer;