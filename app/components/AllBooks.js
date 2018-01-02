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
      <Card.Group itemsPerRow={5}>
        {
          books.map(book => {
            return (
              <Popup
               key={book.id}
              trigger={
                <Card raised>
                <Link to={`/books/${book.id}`}>
                  <Image fluid src={book.coverImage} />
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
                  <Icon className="deleteIcon" name="delete" onClick={() => this.deleteBookHandler(book.id)} size="big" circular corner />
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

// <Grid.Column key={book.id} >
//                 <Segment color="orange" className="allBooksSeg">
//                   <Grid columns={1}>
//                     <Grid.Row>
//                       <Container textAlign="center" fluid>
//                         <b> {book.title} </b>
//                       </Container>
//                       <Container textAlign="center" fluid>
//                         <Rating icon="star" defaultRating={book.rating} maxRating={5} size="small" />
//                       </Container>
//                         <Container fluid>
//                           <Link to={`/books/${book.id}`}>
//                             <Image size="small" centered src={book.coverImage} />
//                           </Link>
//                         </Container>
//                         <Container textAlign="right">
//                         <Icon className="deleteIcon" name="delete" onClick={() => this.deleteBookHandler(book.id)} size="large" />
//                         </Container>
//                     </Grid.Row>
//                   </Grid>
//                 </Segment>
//               </Grid.Column>
