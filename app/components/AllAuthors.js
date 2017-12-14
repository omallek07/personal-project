import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAuthors, deleteAuthorDispatcher } from '../reducers/authors';
import { fetchBooks } from '../reducers/books';

class allAuthors extends Component {
  constructor() {
    super()
    this.deleteAuthorHandler = this.deleteAuthorHandler.bind(this);
  }

  componentDidMount () {
    this.props.fetchAuthors();
    this.props.fetchBooks();
  }

  deleteAuthorHandler (id) {
    this.props.deleteAuthorDispatcher(id);
    this.props.fetchAuthors();
  }

  render () {
  let authors = this.props.authors;
  return (
    <div className="mainDiv">
      <h1 className="title">All Authors</h1>
        <Link to="/addAuthors">
          <button className="button">Add New Author</button>
        </Link>
      <ul className="authorList">
      {
      authors.map(author => {
        return (
          <div key={author.id}>
            <li key={author.id}>
              <Link to={`/authors/${author.id}`} >
                {author.name}
              </Link>
            <br />
            <button
              className="buttonDelete"
              name="delete"
              onClick={() => (this.deleteAuthorHandler(author.id))}>
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

const mapDispatch = { fetchBooks, fetchAuthors, deleteAuthorDispatcher }

export default connect(mapState, mapDispatch)(allAuthors);

