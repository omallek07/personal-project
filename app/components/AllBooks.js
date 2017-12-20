import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBookDispatcher } from '../reducers/books';
import { Grid, Image, Segment, Container, Rating} from 'semantic-ui-react';

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
      <Grid container columns={5} stackable padded fluid>
      <Grid.Row>
      {
        books.map(book => {
          return (
            <Grid.Column key={book.id} >
              <Segment color="orange">
                <Grid>
                <Grid.Column>
                  <Grid.Row>
                    <Container textAlign="center">
                      <b> {book.title} </b>
                    </Container>
                  </Grid.Row>
                  <Grid.Row>
                  <Container textAlign="center">
                  <Rating icon="star" defaultRating={book.rating} maxRating={5} size="mini" />
                </Container>
                  </Grid.Row>
                  <Grid.Row>
                      <Container>
                        <Link to={`/books/${book.id}`}>
                          <Image size="medium" rounded src={book.coverImage} />
                        </Link>
                      </Container>
                  </Grid.Row>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
          )
        })
      }
      </Grid.Row>
      </Grid>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({books}) => ({books});

const mapDispatch = { fetchBooks, deleteBookDispatcher }

export default connect(mapState, mapDispatch)(allBooks);
