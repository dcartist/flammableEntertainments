import React from 'react';
import Ingredients from './Ingredients'
import Tools from "./Tools"
import Instruction from "./Instructions"
import Video from "./Video"
import { Divider, Header } from 'semantic-ui-react'
function Episode(props){
    return (
        <div className="EpisodeBase">
            
            <h1>{props.title}</h1>
            <p>Episode #{props.episode_num}</p>
            {props.episode_description}
            <Video {...props}></Video>
    {props.drinks.map((item, index)=>(<div className="drinkIndividualList" key={index}>
        <Header as='h3' floated='left'>
        {item.drink_name} 
     </Header>

    <Divider clearing />
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