import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGenres } from '../reducers/genres';
import {Container, Segment} from 'semantic-ui-react';

class allGenres extends Component {

  componentWillMount () {
    this.props.fetchGenres()
  }


  render () {
    let { genres } = this.props;
    return (
      <div>
        <Container textAlign="center">
        <h1>All Genres</h1>
        </Container>
        {
          genres.map(genre => {
            return (
              <Link to={`/genres/${genre}`} key={genre}>
                  <Segment color="orange" className="allBooksSeg">
                    <Container textAlign="center">
                      {genre}
                    </Container>
                  </Segment>
                </Link>
              )
            }
          )
        }
      </div>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({genres}) => {
    const genreList = [];
    const allGenres = genres;
    allGenres.map(genre => {
      if (!genreList.includes(genre.category)) {
        genreList.push(genre.category);
      }
  });
  return { genres: genreList}
}

const mapDispatch = { fetchGenres };

export default connect(mapState, mapDispatch)(allGenres);
