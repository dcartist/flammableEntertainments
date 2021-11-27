import React from 'react';
import { Segment, Header } from 'semantic-ui-react'

function Tools(props){
    return (
   

<Segment.Group raised>
            
<Segment inverted color='black'><Header as='h5' secondary>
Tools
</Header>
    </Segment>
{ Object.entries(props).map(([key, value]) => <Segment compact key={key}>{value.tool}</Segment>)}
</Segment.Group>
    )
}


export default Tools;