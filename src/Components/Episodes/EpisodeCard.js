import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Segment, Header } from 'semantic-ui-react'

function EpisodeCard(props){
    return (
        <div key={props.key}>
             <Link to={"/episode/id/"+props.id}>
            <Card raised>
            <Card.Content>
            <Segment inverted fluid color="black"><Header as="h4">{props.acf.title}</Header></Segment>
        {/* <Card.Header color="black" inverted>{props.acf.title}</Card.Header> */}
    <Card.Meta>Episode #{props.acf.episode_num}</Card.Meta>
        <Card.Description>
         {props.acf.episode_description}
        </Card.Description>
      </Card.Content>
            </Card>
           </Link>
        </div>
    )
}
export default EpisodeCard;