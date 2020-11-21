import React from 'react';
function Ingredients(props){
    return (
        <div>
    { Object.entries(props).map(([key, value]) => <div key={key}>{value.ingredient}</div>)}
        </div>
    )
}

export default Ingredients;