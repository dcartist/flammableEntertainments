import React from 'react';
import { Segment, Header } from 'semantic-ui-react'

function Instructions(props){
return (
   

<Segment.Group raised>
            
<Segment inverted color='black'><Header as='h5' secondary>
Instructions
</Header>
    </Segment>
<Segment>{props.instructions}</Segment>
</Segment.Group>
)
}

export default Instructions;