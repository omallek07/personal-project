import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBookDispatcher } from '../reducers/books';
import { Grid, Image, Segment, Container, Rating, Button, Icon} from 'semantic-ui-react';


class allBooks extends Component {
  constructor({isHovering = false}) {
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
      <Grid columns={4} stackable stretched>
        {
          books.map(book => {
            return (
              <Grid.Column key={book.id} >
                <Segment color="orange" className="allBooksSeg">
                  <Grid columns={1}>
                    <Grid.Row>
                      <Container textAlign="center" fluid>
                        <b> {book.title} </b>
                      </Container>
                      <Container textAlign="center" fluid>
                        <Rating icon="star" defaultRating={book.rating} maxRating={5} size="mini" />
                      </Container>
                        <Container fluid>
                          <Link to={`/books/${book.id}`}>
                            <Image size="small" centered src={book.coverImage} />
                          </Link>
                        </Container>
                        <Container textAlign="right">
                        <Icon className="deleteIcon" name="delete" onClick={() => this.deleteBookHandler(book.id)} size="large" />
                        </Container>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Grid.Column>
            )
          })
        }
      </Grid>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({books}) => ({books});

const mapDispatch = { fetchBooks, deleteBookDispatcher }

export default connect(mapState, mapDispatch)(allBooks);
