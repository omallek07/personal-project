import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGenreBooks } from '../reducers/selectedGenre';
import { Container, Image, Card, Popup, Rating, Segment } from 'semantic-ui-react';

/* -----------    COMPONENT    ----------- */

class SingleGenre extends Component {

  componentDidMount () {
    const genreName = this.props.genreName;
    const userId = this.props.user.id;
    this.props.fetchGenreBooks(userId, genreName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.genreName !== this.props.genreName) {
      const genreName = nextProps.genreName;
      const userId = this.props.user.id;
      this.props.fetchGenreBooks(userId, genreName);
    }
  }

  render () {
    const {selectedGenre} = this.props;
    return (
      <Segment id="inner-segment">
        <Container id="inner-container">
          {
            selectedGenre.length && selectedGenre.map(book => {
              return (
                <Popup
                key={book.id}
                trigger={
                  <Card id="all-books-card" raised>
                    <Link to={`/books/${book.id}`}>
                      <Image id="all-books-card-image" fluid size="medium" src={book.coverImage} />
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
                </Popup.Content>
              </Popup>
              )
            })
          }
        </Container>
      </Segment>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({selectedGenre, user}, ownProps) => ({selectedGenre, ownProps, user})

const mapDispatch = { fetchGenreBooks }

export default connect(mapState, mapDispatch)(SingleGenre);

