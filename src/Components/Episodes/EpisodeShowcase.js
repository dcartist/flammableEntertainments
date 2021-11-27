import React from 'react'

import { Card, Button } from "react-bootstrap";

export default function EpisodeShowcase(props) {
    console.log(props.Photo)
    if (props.Photo === undefined) {
        return (
            <div>
    <div className="card mb-3" style={{minWidth: '500px'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="350"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Image
            </text>
          </svg>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Card Text
            </p>
            <p className="card-text">
              <small className="text-muted">Card Text 2</small>
            </p>
          </div>
        </div>
      </div>
    </div>
                
            </div>
        )
    } else {
        return (
            <div>
<Card border="secondary">
<Card.Title> <h2>{props.showTitle}</h2></Card.Title>
    <Card.Body  style={{ backgroundImage: `url(${props.Photo})`, height: "300px" }} className="showcaseImage"></Card.Body>
    <Card.Body>
      <Card.Text>
      <p>{props.showDescription}</p>
      </Card.Text>
      
                    <p> drinks listed: </p>
                    <ul> {props.DrinkList.map((item, index) => <li> {item.drinkName} </li>)}</ul>
    </Card.Body>
    <Button variant="secondary">Go somewhere</Button>
  </Card>
            </div>
        )
    }
    
}
