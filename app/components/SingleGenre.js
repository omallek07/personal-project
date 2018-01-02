import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGenreByType } from '../reducers/selectedGenre';
import { Segment, Grid, Image, Container, Button } from 'semantic-ui-react';


/* -----------    COMPONENT    ----------- */

class singleGenre extends Component {

  componentWillMount () {
    const categoryType = this.props.match.params.categoryType;
    const userId = this.props.user.id;
    this.props.fetchGenreByType(userId, categoryType)
  }

  render () {
    let genreBooks = this.props.selectedGenre;
    let genre = this.props.match.params.categoryType;

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment textAlign="center">
            <h1 className="title">{`All ${genre} books`}</h1>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      {
      genreBooks.length > 0 && genreBooks.map(books => {
        return (
          <Grid.Column key={books.title} container width={4} fluid>
            <Link to={`/books/${books.id}`}>
              <Segment className="allBooksSeg">
                <Container textAlign="center">
                  <b> {books.title} </b>
                </Container>
                <Image src={books.coverImage} centered />
              </Segment>
            </Link>
            </Grid.Column>
            )
          })
        }
        <Grid.Row>
          <Grid.Column>
            <Container>
              <Link className="mainLink" to="/allGenres" >
                <Button>Go Back</Button>
              </Link>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({selectedGenre, user}, ownProps) => ({selectedGenre, ownProps, user})

const mapDispatch = { fetchGenreByType }

export default connect(mapState, mapDispatch)(singleGenre);
