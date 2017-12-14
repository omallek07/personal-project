import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGenres, deleteGenreDispatcher } from '../reducers/genres';

class allGenres extends Component {
  constructor() {
    super()
    this.deleteGenreHandler = this.deleteGenreHandler.bind(this);
  }

  componentDidMount () {
    this.props.fetchGenres();
  }

  deleteGenreHandler (id) {
    this.props.deleteGenreDispatcher(id);
    this.props.fetchGenres();
  }

  render () {
  let genres = this.props.genres;
  return (
    <div className="mainDiv">
      <h1 className="title">All Genres</h1>
        <Link to="/addGenres">
          <button className="button">Add New Genre</button>
        </Link>
      <ul className="authorList">
      {
      genres.map(genre => {
        return (
          <div key={genre.id}>
            <li key={genre.id}>
              <Link to={`/genres/${genre.id}`} >
                {genre.type}
              </Link>
            <br />
            <button
              className="buttonDelete"
              name="delete"
              onClick={() => (this.deleteGenreHandler(genre.id))}>
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
const mapState = ({genres}) => ({genres});

const mapDispatch = { fetchGenres, deleteGenreDispatcher }

export default connect(mapState, mapDispatch)(allGenres);
