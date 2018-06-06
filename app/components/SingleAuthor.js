import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAuthorsBooks } from '../reducers/selectedAuthor';
import { Container, Segment, Image, Card, Popup, Rating, Icon } from 'semantic-ui-react';

/* -----------    COMPONENT    ----------- */

class SingleAuthor extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const authorName = this.props.authorName;
    const userId = this.props.user.id;
    this.props.fetchAuthorsBooks(userId, authorName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authorName !== this.props.authorName) {
      const authorName = nextProps.authorName;
      const userId = this.props.user.id;
      this.props.fetchAuthorsBooks(userId, authorName);
    }
  }

  render () {
    const {selectedAuthor} = this.props;
    return (
      <Segment className="innersegment">
        <Container>
          <Card.Group itemsPerRow={7}>
          {
            selectedAuthor.length && selectedAuthor.map(book => {
              return (
                <Popup
                key={book.id}
                trigger={
                  <Card id="sorted-book-img" raised>
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
              </Popup.Content>
              </Popup>
              )
            })
          }
          </Card.Group>
        </Container>
      </Segment>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({selectedAuthor, user}, ownProps) => ({selectedAuthor, ownProps, user})

const mapDispatch = { fetchAuthorsBooks }

export default connect(mapState, mapDispatch)(SingleAuthor);

