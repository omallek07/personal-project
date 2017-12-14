import { combineReducers } from 'redux';
import authors from './authors';
import books from './books';
import genres from './genres';
import selectedAuthor from './selectedAuthor';
import selectedBook from './selectedBook';
import selectedGenre from './selectedGenre';

const rootReducer = combineReducers({authors, selectedAuthor, books, selectedBook, genres, selectedGenre});

export default rootReducer;
