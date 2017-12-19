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
      <div>
        <Menu pointing color={'teal'} inverted>
          <Menu.Item name="addBook" active={activeItem === 'addBook'} onClick={this.handleItemClick}>
            <Link to="/newBook">
              Add Book
            </Link>
          </Menu.Item>
          <Menu.Item name="allBooks"  active={activeItem === 'allBooks'} onClick={this.handleItemClick}>
            <Link to="/allBooks">
              All Books
            </Link>
          </Menu.Item>
          <Menu.Item name="allAuthors" active={activeItem === 'allAuthors'} onClick={this.handleItemClick}>
            <Link to="/allAuthors">
              All Authors
            </Link>
          </Menu.Item>
          <Menu.Item name="allGenres" active={activeItem === 'allGenres'} onClick={this.handleItemClick}>
            <Link to="/allGenres">
              All Genres
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
