import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewBookDispatcher } from '../reducers/books';
import { Form, Dropdown, Segment } from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';

class Home extends Component {
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
    this.onBookSelect = this.onBookSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onChange(e, data) {
    this.setState({query: data.value});
    this.onBookSelect(this.state.books[data.value])
  }

  onBookSelect(book) {
    const bookObj = {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      publishedDate: book.volumeInfo.publishedDate,
      coverImage: book.volumeInfo.imageLinks.smallThumbnail,
      description: book.searchInfo.textSnippet
    }
    this.props.addNewBookDispatcher(bookObj);
    console.log('book added!')
  }

  onSearchChange(e, data) {
    clearTimeout(this.timer);
    this.setState({
      query: data.searchQuery
    });
    this.timer = setTimeout(this.fetchOptions, 1000)
  }

  fetchOptions() {
    if (!this.state.query) return;
    this.setState({loading: true});
    console.log('query', this.state.query)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&langRestrict=english&maxResults=5&orderBy=relevance&printType=books&projection=lite&key=AIzaSyAHK1GBHj_DVt4qk3Wr6lnGtCAD9Q2iY48`)
    .then(res => { return res.json()
    })
    .then(bookList => {
      console.log('bookList', bookList.items)
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
      console.log('state', this.state)
    });
  }

  render () {
    return (
      <Segment>
        <h1>Add new book to your collection</h1>
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
      </Segment>
    )
  }
}

  /* --------------- CONTAINER ----------------------- */

  const mapState = null;
  const mapDispatch = { addNewBookDispatcher };

  export default connect(mapState, mapDispatch)(Home);

  // <div>
  //   <Link to="/allBooks">
  //     <button>Click to see all books</button>
  //   </Link>
  // </div>
  // <div>
  //   <Link to="/allAuthors">
  //     <button>Click to see all authors</button>
  //   </Link>
  // </div>
  // <div>
  //   <Link to="/allGenres">
  //     <button>Click to see all genres</button>
  //   </Link>
  // </div>
