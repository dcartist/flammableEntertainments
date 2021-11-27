import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import { Menu } from 'semantic-ui-react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
class Navigation extends Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
    return (
        <div className="NavBackground">
            <div> <img src={process.env.PUBLIC_URL + '/images/flammablehorizon_cropped.gif'} /></div> 
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Home</Link></li>
              <AnchorLink href='#things'>Things</AnchorLink>
    <AnchorLink href='#stuff'>Stuff</AnchorLink>
              </ul>
            
            <div> <Menu stackable size='medium'>
        <Menu.Item
          name='home'
          as={Link}
            to="/"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        ><Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item
          name='about'
          as={Link}
            to="/about"
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name='episodes'
          as={Link}
            to="/episode"
          active={activeItem === 'episodes'}
          onClick={this.handleItemClick}
        >
          Episodes
        </Menu.Item>
      </Menu></div>
        </div>
     
    )
    }
}

export default Navigation;