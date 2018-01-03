import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAuthors } from '../reducers/authors';
import {Card, Header, Icon, Container, Dropdown} from 'semantic-ui-react';
import SingleAuthor from './SingleAuthor';

class allAuthors extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e, {value}) {
    this.setState({value});
  }

  componentDidMount () {
    this.props.fetchAuthors(this.props.user.id);
  }

  render () {
    const {authors} = this.props;
    const sortedAuthors = authors.sort();
    return (
      <Container>
        <Dropdown
        placeholder="Select Author"
        fluid
        selection
        options={
          sortedAuthors.map(author => {
            return {
              text: author,
              value: author
            }
          })
        }
        onChange={this.changeHandler}
        />
        <Container>
          { this.state.value && <SingleAuthor authorName={this.state.value} /> }
        </Container>
      </Container>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({authors, user}) => {
  const authorsArr = authors.map(author => author.author)
  const filteredAuthors = [];
  authorsArr.forEach(author => {
    if (!filteredAuthors.includes(author)) {
      filteredAuthors.push(author)
    }
  });
return { authors: filteredAuthors, user}
}

const mapDispatch = { fetchAuthors };

export default connect(mapState, mapDispatch)(allAuthors);

