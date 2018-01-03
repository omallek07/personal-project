import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAuthors } from '../reducers/authors';
import {Grid, Dropdown, Header} from 'semantic-ui-react';
import SingleAuthor from './SingleAuthor';

class allAuthors extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      books: {}
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
    const {filteredAuthors} = this.props;
    const sortedAuthors = filteredAuthors.sort();

    return (
      <Grid>
        <Grid.Column>
          <Grid.Row>
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
          </Grid.Row>
        <Grid.Row>
          { this.state.value && <SingleAuthor authorName={this.state.value} /> }
        </Grid.Row>
        </Grid.Column>
        </Grid>
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
  return { filteredAuthors: filteredAuthors, user}
}

const mapDispatch = { fetchAuthors };

export default connect(mapState, mapDispatch)(allAuthors);

