import React, {Component} from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';
import fetch from 'isomorphic-fetch'

class SearchBookForm extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      loading: false,
      options: [],
      books: {}
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.fetchOptions = this.fetchOptions.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, data) {
    this.setState({query: data.value});
    this.props.onBookSelect(this.state.books[data.value])
  }

  onSearchChange(e, data) {
    clearTimeout(this.timer);
    this.setState({
      query: data.searchQuery
    });
    this.timer = setTimeout(this.fetchOptions, 500)
  }

  fetchOptions() {
    if (!this.state.query) return;
    this.setState({loading: true});
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&langRestrict=english&maxResults=5&orderBy=relevance&printType=books&key=AIzaSyAHK1GBHj_DVt4qk3Wr6lnGtCAD9Q2iY48`)
    .then(res => { return res.json()
    })
    .then(bookList => {
      const options = [];
      const booksHash = {};
      const books = bookList.items;
      books.forEach(book => {
        booksHash[book.id] = book;
        options.push({
          key: book.id,
          value: book.id,
          text: book.volumeInfo.title
        })
      });
      this.setState({ loading: false, options, books: booksHash})
    });
  }
  render () {
    return (
      <Form>
      <Dropdown
        search
        fluid
        placeholder="Please search by book title"
        value={this.state.query}
        onSearchChange={this.onSearchChange}
        options={this.state.options}
        loading={this.state.loading}
        onChange={this.onChange}
      />
  </Form>
    )
  }
}

SearchBookForm.propTypes = {
  onBookSelect: PropTypes.func.isRequired
};

 /* --------------- CONTAINER ----------------------- */

 const mapState = null;
 const mapDispatch = null;

 export default connect(mapState, mapDispatch)(SearchBookForm);
