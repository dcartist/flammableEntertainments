import React from 'react';
import Ingredients from './Ingredients'

function Episode(props){
    return (
        <div>
            <h1>{props.title}</h1>
            {props.episode_description}
    {props.drinks.map(item=>(<div><h4>{item.drink_name} </h4>
        <Ingredients {...item.ingredients}></Ingredients>
    </div>))}
        </div>
    )
}
export default Episode;