import React from 'react';

function Episode(props){
    return (
        <div>
            {props.title}
            {props.episode_description}
    {props.drinks.map(item=>{<div>{item.drink_name}</div>})}
        </div>
    )
}
export default Episode;