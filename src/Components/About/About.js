import React, { Component } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

class About extends Component {
    constructor(){
        super()
        this.state = {
            results:""
        }
    }
   
    render() {  
        console.log(this.state.results)
        return (
            <div>
                <h2>HOST</h2>
                <p>
                Tor Johnson, geek and drink connoisseur.
                </p>
                 <img src={`${process.env.PUBLIC_URL}/images/torJohnson.jpeg`}></img>

                 <h2>Lovely Assistant</h2>
                 <p>Fun-loving enjoyable assistant</p>
                 <img src={`${process.env.PUBLIC_URL}/images/thumbsup.png`} className="thumbsup"></img>
            </div>
        );
    }
}

export default About;