import React, { Component } from 'react';
import Episode from "./EpisodeCard"
import axios from 'axios';
class EpisodeListing extends Component {
    constructor(){
        super()
        this.state={
            epsidodes:[]
        }
    }
    componentDidMount(){
        axios.get("https://www.flameableent.com/wp-json/acf/v3/posts").then(
            results => {
                // console.log(results.data)
                this.setState({epsidodes: results.data})
            }
        )
    }
    render() {
        console.log(this.state.epsidodes)
        return (
            <div>
                {this.state.epsidodes.map((item, index)=><div key={index}><Episode {...item}></Episode></div>)}
            </div>
        );
    }
}

export default EpisodeListing;