import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../reducers/genres';
import {Grid, Dropdown, Segment} from 'semantic-ui-react';
import SingleGenre from './SingleGenre';

class allGenres extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      books: {}
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e, {value}) {
    this.setState({value});
  }

  componentDidMount () {
    this.props.fetchGenres(this.props.user.id);
  }

  render () {
    const {filteredGenres} = this.props;
    const sortedGenres = filteredGenres.sort();

    return (
      <Grid>
        <Grid.Column>
          <Grid.Row>
            <Dropdown
              placeholder="Select Genre"
              fluid
              selection
              options={
                sortedGenres.map(genre => {
                  return {
                    text: genre,
                    value: genre
                  }
                })
              }
              onChange={this.changeHandler}
            />
          </Grid.Row>
        <Grid.Row>
          { this.state.value &&
            <Segment color="orange">
              <SingleGenre genreName={this.state.value} />
            </Segment>
          }
        </Grid.Row>
      </Grid.Column>
    </Grid>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({genres, user}) => {
  const genresArr = genres.map(genre => genre.category)
  const filteredGenres = [];
  genresArr.forEach(genre => {
    if (!filteredGenres.includes(genre)) {
      filteredGenres.push(genre)
    }
  });
  return { filteredGenres: filteredGenres, user}
}

const mapDispatch = { fetchGenres };

export default connect(mapState, mapDispatch)(allGenres);

