import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
// import { Menu } from 'semantic-ui-react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link} from 'react-scroll'
class Navigation extends Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
    return (
        <div className="NavBackground">
            <div> <img src={process.env.PUBLIC_URL + '/images/flammablehorizon_cropped.gif'} /></div> 
            <ul>
              {/* <li><Link to="/">Home</Link></li> */}
              <li><Link  to="things" spy={true} smooth={true}>Home</Link></li>
              <li><Link to="stuff"  spy={true} smooth={true}>Home</Link></li>

              
              {/* <AnchorLink href='#things'>Things</AnchorLink> */}
    <AnchorLink href='#stuff'>Stuff</AnchorLink>
    <AnchorLink href='#thistest'>Stuff</AnchorLink>
              </ul>
            
           
        </div>
     
    )
    }
}

export default Navigation;