import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class MenuExampleContentProp extends Component {
    state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    

    return (
      <Menu stackable >
          
           <Menu.Item
          name='logo (home)'
          active={activeItem === 'logo (home)'}
          content='logo (home)'
          onClick={this.handleItemClick}
          color={'blue'}

          
        />
          
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          content='Editorials'
          onClick={this.handleItemClick}
          color={'blue'}

          
        />

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          content='Reviews'
          onClick={this.handleItemClick}
          color={'blue'}

        />

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='Upcoming Events'
          onClick={this.handleItemClick}
          color={'blue'}
        />
      </Menu>
    )
  }
}