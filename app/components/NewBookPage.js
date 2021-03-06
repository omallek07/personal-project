import React, {Component} from 'react';
import SearchBookForm from './SearchBookForm';
import {Segment, Header} from 'semantic-ui-react';
import BookForm from './BookForm';
import { addNewBookDispatcher } from '../reducers/books'
import { connect } from 'react-redux';


class NewBookPage extends Component {
  constructor() {
    super()
    this.state = {
      book: null
    }
    this.onBookSelect = this.onBookSelect.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  onBookSelect(book) {
    this.setState({ book })}

  addBook(book) {
    this.props.addNewBookDispatcher(book);
  }

  render() {
    return (
      <Segment>
        <Header style={{paddingBottom: '15px'}}>Add new book to your collection</Header>
        <SearchBookForm onBookSelect={this.onBookSelect} />

        {this.state.book && <BookForm submit={this.addBook} book={this.state.book} />}
      </Segment>
    )
  }
}

 /* --------------- CONTAINER ----------------------- */

const mapDispatch = ({addNewBookDispatcher});

export default connect(null, mapDispatch)(NewBookPage);
