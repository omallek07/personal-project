import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class Sidebar extends Component {
  constructor() {
    super()
    this.state = { activeItem: 'addBook'}
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }) {
    this.setState({activeItem: name})
  }

  render () {
    const { activeItem } = this.state;
    return (
      <Menu pointing color="teal">
        <Link to="/newBook">
          <Menu.Item name="addBook" active={activeItem === 'addBook'} onClick={this.handleItemClick}>
              Add Book
          </Menu.Item>
        </Link>
        <Link to="/allBooks">
          <Menu.Item name="allBooks"  active={activeItem === 'allBooks'} onClick={this.handleItemClick}>
            All Books
          </Menu.Item>
        </Link>
        <Link to="/allAuthors">
          <Menu.Item name="allAuthors" active={activeItem === 'allAuthors'} onClick={this.handleItemClick}>
            All Authors
          </Menu.Item>
        </Link>
        <Link to="/allGenres">
          <Menu.Item name="allGenres" active={activeItem === 'allGenres'} onClick={this.handleItemClick}>
            All Genres
          </Menu.Item>
        </Link>
        <Link to="/funFacts">
          <Menu.Item name="funFacts" active={activeItem === 'funFacts'} onClick={this.handleItemClick}>
            Fun Facts
          </Menu.Item>
        </Link>
        <Link to="/otherUsers">
          <Menu.Item name="otherUsers" active={activeItem === 'otherUsers'} onClick={this.handleItemClick}>
            Friend's Lists
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}
