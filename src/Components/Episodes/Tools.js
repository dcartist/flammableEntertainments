import React from 'react';

function Tools(props){
    return (
        <div>
    { Object.entries(props).map(([key, value]) => <div key={key}>{value.tool}</div>)}
        </div>
    )
}


export default Tools;