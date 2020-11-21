import React from 'react';
import Ingredients from './Ingredients'

function Episode(props){
    return (
        <div>
            {props.title}
            {props.episode_description}
    {props.drinks.map(item=>(<div>{item.drink_name} test
        <Ingredients {...item.ingredients}></Ingredients>
    </div>))}
        </div>
    )
}
export default Episode;