import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks } from '../reducers/books';
import { Segment, Grid, Image, Container, Button, Popup, Card, Header } from 'semantic-ui-react';


/* -----------    COMPONENT    ----------- */

class singleOtherUser extends Component {

  componentDidMount () {
    const userId = this.props.location.state.user.id;
    this.props.fetchBooks(userId);
  }

  render () {
  let {books} = this.props;
  let userName = this.props.location.state.user.name;
  return (
    <Segment>
      <Grid>
      <Grid.Column>
       <Header>{`${userName}'s Books`}</Header>
        <Grid.Row>
          <Segment className="innersegment">
            <Container>
              <Card.Group itemsPerRow={7}>
              {
              (books.length > 0) && books.map(book => {
                return (
                  <Popup
                        key={book.id}
                      trigger={
                        <Card raised>
                          <Link to={`/books/${book.id}`}>
                            <Image size="medium" src={book.coverImage} />
                          </Link>
                        </Card>
                      }
                      hoverable
                      size="tiny"
                      >
                      <Popup.Header>
                        {book.title}
                      </Popup.Header>
                    </Popup>
                    )
                  })
                }
              </Card.Group>
            </Container>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <br />
            <Link className="mainLink" to="/otherUsers" >
              <Button>Go Back</Button>
            </Link>
          </Container>
        </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({books}, ownProps) => ({books, ownProps})

const mapDispatch = { fetchBooks }

export default connect(mapState, mapDispatch)(singleOtherUser);
