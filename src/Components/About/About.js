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
    componentDidMount(){
        axios.get('https://flameableent.com/wp-json/wp/v2/pages/48').then(results=>this.setState({results: results.data.content.rendered}))
    }
    render() {
        console.log(this.state.results)
        return (
            <div>
               {parse(this.state.results)} 
            </div>
        );
    }
}

export default About;