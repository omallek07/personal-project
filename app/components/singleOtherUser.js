import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks } from '../reducers/books';
import { Segment, Grid, Image, Container, Button } from 'semantic-ui-react';


/* -----------    COMPONENT    ----------- */

class singleOtherUser extends Component {

  componentDidMount () {
    const userId = this.props.location.state.user.id;
    this.props.fetchBooks(userId);
  }

  render () {
  let {books} = this.props;
  let userEmail = this.props.location.state.user.email
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment textAlign="center">
            <h1 className="title">{`${userEmail}'s Collection`}</h1>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      {
      (books.length > 0) && books.map(book => {
        return (
          <Grid.Column key={book.id} container width={4} fluid>
            <Link to={`/books/${book.id}`}>
              <Segment className="allBooksSeg">
                <Container textAlign="center">
                  <b> {book.title} </b>
                </Container>
                <Image src={book.coverImage} centered />
              </Segment>
            </Link>
            </Grid.Column>
            )
          })
        }
        <Grid.Row>
          <Grid.Column>
            <Container>
              <Link className="mainLink" to="/otherUsers" >
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

const mapState = ({books}, ownProps) => ({books, ownProps})

const mapDispatch = { fetchBooks }

export default connect(mapState, mapDispatch)(singleOtherUser);
