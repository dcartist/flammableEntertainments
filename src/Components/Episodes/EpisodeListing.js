import React, { Component } from 'react';
import Episode from "./EpisodeCard"
import axios from 'axios';
import { Icon } from 'semantic-ui-react'

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
        if (this.state.epsidodes.length === 0 ) {return (
            <div className="EpisodeLoading">
                <Icon.Group size='huge'>
      <Icon loading size='huge' name='square outline' color='black' />
               <Icon color='red' name='fire' size='big'/>
      
    </Icon.Group>
            </div>
        );} else 
        {return (
            <div className="episodeList">
                {this.state.epsidodes.map((item, index)=><div className="episodeListCard" key={index}><Episode {...item} key={index}></Episode></div>)}
            </div>
        );}
    }
}

export default EpisodeListing;