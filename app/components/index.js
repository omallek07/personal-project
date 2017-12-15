/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './Main'
export {default as Home} from './Home'
export {Login, Signup} from './auth-form'
export {default as AllBooks} from './AllBooks';
export {default as AllGenres} from './AllGenres';
export {default as AllAuthors} from './AllAuthors';
export {default as SingleAuthor} from './SingleAuthor';
export {default as SingleBook} from './SingleBook';
export {default as SingleGenre} from './SingleGenre';

