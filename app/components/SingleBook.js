import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBookByID } from '../reducers/selectedBook';

/* -----------    COMPONENT    ----------- */

class singleBook extends Component {

  componentWillMount () {
    const bookId = Number(this.props.match.params.bookId);
    this.props.fetchBookByID(bookId)
  }

  render () {
    let { authors } = this.props;
    let book = this.props.selectedBook;
    return (
      <div className="mainDiv">
        <h1 className="title">{`This book is called ${book.title}`}</h1>
        <div>
          <Link className="mainLink" to="/allBooks" >
            <button className="button">Go Back</button>
          </Link>
      </div>
    </div>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({authors, selectedBook}) => ({ selectedBook, authors})

const mapDispatch = { fetchBookByID }

export default connect(mapState, mapDispatch)(singleBook);
