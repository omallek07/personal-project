import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class Sidebar extends Component {
  constructor() {
    super()
    this.state = { activeItem: 'home'}
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }) {
    this.setState({activeItem: name})
  }

  render () {
    const { activeItem } = this.state;
    return (
      <Menu pointing>
        <Link to="/home">
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
            Home
          </Menu.Item>
        </Link>
        <Link to="/newBook">
          <Menu.Item name="addBook" active={activeItem === 'addBook'} onClick={this.handleItemClick}>
            Add Book
          </Menu.Item>
        </Link>
        <Link to="/allBooks">
          <Menu.Item name="allBooks"  active={activeItem === 'allBooks'} onClick={this.handleItemClick}>
            My Books
          </Menu.Item>
        </Link>
        <Link to="/allAuthors">
          <Menu.Item name="allAuthors" active={activeItem === 'allAuthors'} onClick={this.handleItemClick}>
            My Authors
          </Menu.Item>
        </Link>
        <Link to="/allGenres">
          <Menu.Item name="allGenres" active={activeItem === 'allGenres'} onClick={this.handleItemClick}>
            My Genres
          </Menu.Item>
        </Link>
        <Link to="/otherUsers">
          <Menu.Item name="otherUsers" active={activeItem === 'otherUsers'} onClick={this.handleItemClick}>
            My Friend's Lists
          </Menu.Item>
        </Link>
        <Link to="/funFacts">
          <Menu.Item name="funFacts" active={activeItem === 'funFacts'} onClick={this.handleItemClick}>
            Fun Facts
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}
