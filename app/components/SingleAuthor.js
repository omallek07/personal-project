import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAuthorsBooks } from '../reducers/selectedAuthor';
import { Container, Image, Card } from 'semantic-ui-react';

/* -----------    COMPONENT    ----------- */

class SingleAuthor extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps () {
    const authorName = this.props.authorName;
    const userId = this.props.user.id;
    this.props.fetchAuthorsBooks(userId, authorName);
  }

  render () {
    const {selectedAuthor} = this.props;
    return (
        <Container>
        <Card>
        <h1>hello</h1>
        </Card>
      </Container>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({selectedAuthor, user}, ownProps) => ({selectedAuthor, ownProps, user})

const mapDispatch = { fetchAuthorsBooks }

export default connect(mapState, mapDispatch)(SingleAuthor);

// <Card.Group itemsPerRow={4}>
//         {
//           selectedAuthor.length && selectedAuthor.map(book => {
//             return (
//               <Card key={book.id}>
//                 <Image src={book.coverImage} />
//               <Card.Container>
//                 {book.title}
//               </Card.Container>
//               </Card>
//             )
//           })
//         }
//       </Card.Group>

