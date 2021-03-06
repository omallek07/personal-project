import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Header, Dropdown, Segment, Container} from 'semantic-ui-react';
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

  render () {
    const {filteredGenres} = this.props;
    const sortedGenres = filteredGenres.sort();

    return (
      <Segment>
        <Grid>
          <Grid.Column>
            <Header>Search collection by genre</Header>
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
              <Container>
                <SingleGenre genreName={this.state.value} />
              </Container>
            }
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
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

export default connect(mapState, null)(allGenres);

