import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBookDispatcher } from '../reducers/books';
import { Image, Rating, Icon, Card, Popup} from 'semantic-ui-react';

class allBooks extends Component {
  constructor() {
    super()
    this.deleteBookHandler = this.deleteBookHandler.bind(this);
  }

  componentDidMount () {
    this.props.fetchBooks(this.props.user.id);
  }

  deleteBookHandler (id) {
    this.props.deleteBookDispatcher(id);
    this.props.fetchBooks(this.props.user.id);
  }

  render () {
    let {books} = this.props;

    return (
      <Card.Group itemsPerRow={7}>
        {
          books.map(book => {
            return (
              <Popup
               key={book.id}
              trigger={
                <Card raised>
                  <Link to={`/books/${book.id}`}>
                    <Image fluid size="medium" src={book.coverImage} />
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
        <Card>
          <Card.Content textAlign="center">
          <Link to="/newBook">
              <Icon link name="plus" size="huge" color="orange" />
          </Link>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({books, user}) => ({books, user});

const mapDispatch = { fetchBooks, deleteBookDispatcher }

export default connect(mapState, mapDispatch)(allBooks);

