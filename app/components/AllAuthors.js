import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAuthors } from '../reducers/authors';
import {Container, Segment} from 'semantic-ui-react';

class allAuthors extends Component {

  componentDidMount () {
    this.props.fetchAuthors(this.props.user.id);
  }

  render () {
    const {authors} = this.props;
    const sortedAuthors = authors.sort();
    return (
      <div>
      {
        sortedAuthors.map((author) => {
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
const mapState = ({authors, user}) => {
  const authorsList = [];
  const AllAuthors = authors;
  AllAuthors.map((author) => {
    if (!authorsList.includes(author.author)) {
      authorsList.push(author.author);
    }
});
return { authors: authorsList, user}
}

const mapDispatch = { fetchAuthors };

export default connect(mapState, mapDispatch)(allAuthors);

