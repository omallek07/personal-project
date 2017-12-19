import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBookDispatcher } from '../reducers/books';
import { Grid, Image, Segment, Container} from 'semantic-ui-react';

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
      <Grid columns={5} stackable>
        <Grid.Row>
      {
        books.map(book => {
          return (
            <Grid.Column key={book.id}>
            <Segment color="orange" >
              <Image size="tiny" rounded src={book.coverImage} float="left" />
              <Container>
                <b>Title:</b>{` ${book.title}`}
              </Container>
              <Container>
                <b>Author:</b>{` ${book.author}`}
              </Container>
              <Container>
                <b>Description:</b>{` ${book.description}`}
              </Container>
              <Container>
                <b>Page Count:</b>{` ${book.pageCount}`}
              </Container>
              <Container>
                <b>Published Date:</b>{` ${book.publishedDate}`}
              </Container>
              <Container>
                <b>Genre:</b>{` ${book.category}`}
              </Container>
              <Container>
                <b>Rating:</b>{` ${book.rating}`}
              </Container>
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
