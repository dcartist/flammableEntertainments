import React from 'react';

function Tools(props){
    return (
        <div>
    { Object.entries(props).map(([key, value]) => <div>{value.tool}</div>)}
        </div>
    )
}


export default Tools;