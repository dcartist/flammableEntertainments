import React from 'react';
import Ingredients from './Ingredients'
import Tools from "./Tools"
import Instruction from "./Instructions"
import Video from "./Video"
function Episode(props){
    return (
        <div>
            <h1>{props.title}</h1>
            {props.episode_description}
            <Video {...props}></Video>
    {props.drinks.map((item, index)=>(<div key={index}><h4>{item.drink_name} </h4>
        {item.description}
        {item.alcohol? <p>This drink contains alcohol.</p>:<p>This drink contains no alcohol.</p>}
        <Ingredients {...item.ingredients}></Ingredients>
        <Tools {...item.tools}></Tools>
        <Instruction instructions = {item.instructions}></Instruction>
       

    </div>))}
        </div>
    )
}
export default Episode;