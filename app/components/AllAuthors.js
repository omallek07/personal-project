import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAuthors } from '../reducers/authors';
import {Container, Segment} from 'semantic-ui-react';

class allAuthors extends Component {
  constructor({isHovering = false}) {
    super()
  }

  componentDidMount () {
    this.props.fetchAuthors()
  }

  render () {
    const {authors} = this.props;
    return (
      <div>
      <Container textAlign="center">
        <h1>All Authors</h1>
      </Container>
      {
        authors.map((author) => {
          return (
            <Link to={`/authors/${author}`} key={author}>
              <Segment color="orange" className="allBooksSeg">
                <Container textAlign="center">
                  {author}
                </Container>
              </Segment>
            </Link>
          )
        })
      }
      </div>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({authors}) => {
  const authorsList = [];
  const AllAuthors = authors;
  AllAuthors.map((author) => {
    if (!authorsList.includes(author.author)) {
      authorsList.push(author.author);
    }
});
return { authors: authorsList}
}

const mapDispatch = { fetchAuthors };

export default connect(mapState, mapDispatch)(allAuthors);

