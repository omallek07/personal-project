import { combineReducers } from 'redux';
import authors from './authors';
import books from './books';
import genres from './genres';
import selectedAuthor from './selectedAuthor';
import selectedBook from './selectedBook';
import selectedGenre from './selectedGenre';
import user from './user';
import search from './search';
import userCollections from './userCollections';

const rootReducer = combineReducers({authors, selectedAuthor, books, selectedBook, genres, selectedGenre, user, search, userCollections});

export default rootReducer;
export * from './user';
export * from './authors';
export * from './genres';
export * from './books';

