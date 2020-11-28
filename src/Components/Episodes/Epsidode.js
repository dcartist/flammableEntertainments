import React from 'react';
import Ingredients from './Ingredients'
import Tools from "./Tools"
import Instruction from "./Instructions"
import Video from "./Video"
import { Divider, Header, Segment } from 'semantic-ui-react'
function Episode(props){
    return (
        <div className="EpisodeBase">
            <Segment className="EpisodeSegmentHead">
            <h1>{props.title}</h1>
            <Divider horizontal inverted className="EpisodeDivider">
            Episode #{props.episode_num}
    </Divider>
            <p>{props.episode_description}</p>
            <Video {...props}></Video>
            </Segment>
            
            
            
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