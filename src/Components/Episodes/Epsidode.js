import React from 'react';
import Ingredients from './Ingredients'
import Tools from "./Tools"
function Episode(props){
    return (
        <div>
            <h1>{props.title}</h1>
            {props.episode_description}
    {props.drinks.map((item, index)=>(<div><h4>{item.drink_name} </h4>
        <Ingredients {...item.ingredients} key={index}></Ingredients>
        <Tools {...item.tools} key={index}></Tools>
    </div>))}
        </div>
    )
}
export default Episode;