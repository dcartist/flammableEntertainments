import React from 'react';
import {Link} from 'react-router-dom';

function EpisodeCard(props){
    return (
        <div key={props.key}>
            <h3>
            {props.acf.title}
            </h3>
            <Link to={"/episode/id/"+props.id}>Epsiode{props.id}</Link>
        </div>
    )
}
export default EpisodeCard;