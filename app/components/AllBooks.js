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
  }

  deleteBookHandler (id) {
    this.props.deleteBookDispatcher(id);
    this.props.fetchBooks();
  }


  render () {
  let {books} = this.props;
  return (
    <div className="AllBooksDiv">
      <h1 className="title">All Books</h1>
      {
      books.map(book => {
        return (
          <div className="bookDiv" key={book.id}>
            {book.title}
              <Link to={`/books/${book.id}`} >
                <img className="urlLink" src={`${book.coverImage}`} />
              </Link>
            {book.pages}
            <br />
            <button
              className="buttonDelete"
              name="delete"
              onClick={() => (this.deleteBookHandler(book.id))}>
              x
            </button>
            </div>
          )
        })
      }
      </div>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({books}) => ({books});

const mapDispatch = { fetchBooks, deleteBookDispatcher }

export default connect(mapState, mapDispatch)(allBooks);
