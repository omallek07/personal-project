import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../reducers/books';
import {List, Segment} from 'semantic-ui-react';

class FunFacts extends Component {

  componentDidMount () {
    this.props.fetchBooks(this.props.user.id)
  }

  render () {
    let {books, genres, authors} = this.props;
    let totalPages = 0;
    let avg = 0;
    books.map(book => { if (book.pageCount !== 'null') totalPages += book.pageCount})
    books.map(book => { if (book.rating !== 'null') avg += book.rating})
    let averageRating = Math.round(10 * avg / books.length) / 10;

    function mostFreqFact(arr) {
      let obj = {}, mostFreq = 0, which = [];

      arr.forEach(ea => {
        (!obj[ea]) ? obj[ea] = 1 : obj[ea]++;
        if (obj[ea] > mostFreq) {
          mostFreq = obj[ea];
          which = [ea]
        } else if (obj[ea] === mostFreq) {
          which.pop();
          which.push(ea);
        }
      })

      return which;
    }

    const freqAuthor = mostFreqFact(authors)
    const freqGenre = mostFreqFact(genres)

    return (
      {averageRating} &&
      <Segment>
        <List>
        <List.Item icon="book" content={`You've added ${books.length} books to your collection!`} />
        <List.Item icon="sticky note" content={`You have read a total of ${totalPages.toLocaleString('en')} pages.`} />
        <List.Item icon="star" content={`Your average book rating is ${averageRating}.`} />
        <List.Item icon="user" content={`Your favorite author is ${freqAuthor}.`} />
        <List.Item icon="tags" content={`Your favorite genre is ${freqGenre}.`} />
        </List>
      </Segment>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({books, user}) => ({books, user, genres: books.map(book => book.category), authors: books.map(book => book.author)})

const mapDispatch = {fetchBooks};

export default connect(mapState, mapDispatch)(FunFacts)
