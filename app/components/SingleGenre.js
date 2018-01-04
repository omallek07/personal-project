import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGenreBooks } from '../reducers/selectedGenre';
import { Container, Image, Card, Popup } from 'semantic-ui-react';

/* -----------    COMPONENT    ----------- */

class SingleGenre extends Component {
  constructor(props) {
    super(props)
  }

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
      <Container>
        <Card.Group itemsPerRow={7}>
        {
          selectedGenre.length && selectedGenre.map(book => {
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
            </Popup>
            )
          })
        }
        </Card.Group>
      </Container>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({selectedGenre, user}, ownProps) => ({selectedGenre, ownProps, user})

const mapDispatch = { fetchGenreBooks }

export default connect(mapState, mapDispatch)(SingleGenre);

