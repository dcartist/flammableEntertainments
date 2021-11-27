import React from 'react';
import { Segment, Header } from 'semantic-ui-react'

function Ingredients(props){
    return (
        <Segment.Group raised>
            
            <Segment inverted color='black'><Header as='h5' secondary>
      Ingredients
    </Header>
                </Segment>
    { Object.entries(props).map(([key, value]) => <Segment compact key={key}>{value.ingredient}</Segment>)}
    </Segment.Group>
    )
}

export default Ingredients;