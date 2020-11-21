import React from 'react';
import Ingredients from './Ingredients'
import Tools from "./Tools"
import Instruction from "./Instructions"
function Episode(props){
    return (
        <div>
            <h1>{props.title}</h1>
            {props.episode_description}
    {props.drinks.map((item, index)=>(<div><h4>{item.drink_name} </h4>
        <Ingredients {...item.ingredients}></Ingredients>
        <Tools {...item.tools}></Tools>
        <Instruction instructions = {item.instructions}></Instruction>
        {item.alcohol? <p>This drink contains alcohol.</p>:<p>This drink contains no alcohol.</p>}
    </div>))}
        </div>
    )
}
export default Episode;