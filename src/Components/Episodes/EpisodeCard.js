import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Segment, Header, Image } from 'semantic-ui-react'

function EpisodeCard(props){
    return (
        <div key={props.key}>
             <Link to={"/episode/id/"+props.id}>
            <Card raised>
            <Image src={props.acf.episode_photo} wrapped ui={true} size='medium'  as='div' alt={props.acf.title} className="EpisodeListImage"/>
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