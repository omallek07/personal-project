import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBookDispatcher } from '../reducers/books';
import { Image, Grid, Segment, Rating, Icon, Card, Popup} from 'semantic-ui-react';

class allBooks extends Component {
  constructor() {
    super()
    this.deleteBookHandler = this.deleteBookHandler.bind(this);
  }

  deleteBookHandler (id) {
    this.props.deleteBookDispatcher(id);
  }

  render () {
    let {books} = this.props;

    return (
      <Segment id="all-books-segment">
        {
          books.map(book => {
            return (
              <Popup
              key={book.id}
              trigger={
                <Card id="all-books-card" raised>
                  <Link to={`/books/${book.id}`}>
                    <Image id="all-books-card-image" size="medium" src={book.coverImage} />
                  </Link>
                </Card>
              }
              hoverable
              size="tiny"
              >
                <Popup.Header>
                    {book.title}
                  </Popup.Header>
                <Popup.Content>
                  <Rating icon="star" defaultRating={book.rating} maxRating={5} size="small" disabled />
                  <Icon className="deleteIcon" name="delete" onClick={() => this.deleteBookHandler(book.id)} size="small" circular corner />
              </Popup.Content>
              </Popup>
            )
          })
        }
        <Card id="add-new-book-card" raised>
          <Grid verticalAlign="middle" centered>
            <Grid.Row id="add-new-book-plus" stretched>
              <Link to="/newBook">
                <Icon name="plus" link size="huge" centered />
              </Link>
            </Grid.Row>
          </Grid>
        </Card>
      </Segment>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({books, user}) => ({books, user});

const mapDispatch = { deleteBookDispatcher }

export default connect(mapState, mapDispatch)(allBooks);

