import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBookByID } from '../reducers/selectedBook';
import { Grid, Segment, Container, Image, Button, Rating, Header } from 'semantic-ui-react';

/* -----------    COMPONENT    ----------- */

class singleBook extends Component {

  componentDidMount () {
    const bookId = this.props.match.params.bookId;
    this.props.fetchBookByID(bookId)
  }

  render () {
    let book = this.props.selectedBook;
    return (
      <Segment>
        <Grid columns={2} padded divided stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image size="large" rounded src={book.coverImage} float="left" />
            </Grid.Column>
          <Grid.Column width={12}>
        <Container text className="booktitle">
           {book.title}
        </Container>
        <Container text className="authortitle">
          {book.author}
        </Container>
        <Container text className="bookdescription">
         {book.description}
        </Container>
        <Container text>
          <b>Page Count:</b>{` ${book.pageCount}`}
        </Container>
        <Container text>
          <b>Published Date:</b>{` ${book.publishedDate}`}
        </Container>
        <Container text>
          <b>Genre:</b>{` ${book.category}`}
        </Container>
        <Container text>
          {
            book.rating && <div><b>Rating:</b><Rating icon="star" defaultRating={book.rating} maxRating={5} disabled /></div>
          }
        </Container>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link className="mainLink" to="/allBooks" >
              <Button className="button">Go Back</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({selectedBook}) => ({ selectedBook })

const mapDispatch = { fetchBookByID }

export default connect(mapState, mapDispatch)(singleBook);
