import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBookDispatcher } from '../reducers/books';
import { fetchAuthors } from '../reducers/authors';

class allBooks extends Component {
  constructor() {
    super()
    this.deleteBookHandler = this.deleteBookHandler.bind(this);
  }

  componentDidMount () {
    this.props.fetchBooks();
    this.props.fetchAuthors();
  }

  deleteBookHandler (id) {
    this.props.deleteBookDispatcher(id);
    this.props.fetchBooks();
  }

  render () {
  let books = this.props.books;
  return (
    <div className="mainDiv">
      <h1 className="title">All Books</h1>
        <Link to="/addCampus">
          <button className="button">Add New Book</button>
        </Link>
      <ul className="campusList">
      {
      books.map(book => {
        return (
          <div className="campusImg" key={book.id}>
            <li key={book.id}>
            <h3 className="campusName">{book.name}</h3>
              <Link to={`/books/${book.id}`} >
                <img className="urlLink" src={`${book.coverImage}`} />
              </Link>
            <br />
            <button
              className="buttonDelete"
              name="delete"
              onClick={() => (this.deleteBookHandler(book.id))}>
              Delete Book
            </button>
            </li>
          </div>
          )
        })
      }
      </ul>
    </div>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({books, authors}) => ({books, authors});

const mapDispatch = { fetchBooks, fetchAuthors, deleteBookDispatcher }

export default connect(mapState, mapDispatch)(allBooks);
