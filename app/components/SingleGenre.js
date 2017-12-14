import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGenreByID } from '../reducers/selectedGenre';

/* -----------    COMPONENT    ----------- */

class singleGenre extends Component {

  componentWillMount () {
    const genreId = Number(this.props.match.params.genreId);
    this.props.fetchGenreByID(genreId)
  }

  render () {
    let { books } = this.props;
    let genre = this.props.selectedGenre;
    return (
      <div className="mainDiv">
        <h1 className="title">{`This genre is called ${genre.type}`}</h1>
        <div>
          <Link className="mainLink" to="/allGenres" >
            <button className="button">Go Back</button>
          </Link>
      </div>
    </div>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({books, selectedGenre}) => ({ selectedGenre, books})

const mapDispatch = { fetchGenreByID }

export default connect(mapState, mapDispatch)(singleGenre);
