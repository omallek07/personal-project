import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAuthorByID } from '../reducers/selectedAuthor';

/* -----------    COMPONENT    ----------- */

class singleAuthor extends Component {

  componentWillMount () {
    const authorId = Number(this.props.match.params.authorId);
    this.props.fetchAuthorByID(authorId)
  }

  render () {
    let { books } = this.props;
    let author = this.props.selectedAuthor;
    return (
      <div className="mainDiv">
        <h1 className="title">{`All books from ${author.name}`}</h1>
        <div>
          <Link className="mainLink" to="/allAuthors" >
            <button className="button">Go Back</button>
          </Link>
      </div>
    </div>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({books, selectedAuthor}, ownProps) => ({books, selectedAuthor, ownProps})

const mapDispatch = { fetchAuthorByID }

export default connect(mapState, mapDispatch)(singleAuthor);
