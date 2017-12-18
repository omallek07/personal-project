import fetch from 'isomorphic-fetch';

/* ------------ ACTIONS ------------ */

const SET_BOOKS = 'SET_BOOKS';

/* --------- ACTION CREATORS ------------ */

const setBooks = books => ({ type: SET_BOOKS, books});

/* ------------- REDUCER ------------ */
export default function reducer (books = [], action) {
  switch (action.type) {
    case SET_BOOKS:
      return action.books;
    default:
      return books
  }
}

/* ------------- DISPATCHERS ------------ */

export const findBookDispatcher = query => dispatch => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=english&maxResults=5&orderBy=relevance&printType=books&projection=lite&key=AIzaSyAHK1GBHj_DVt4qk3Wr6lnGtCAD9Q2iY48`)
  .then(res => { return res.json()
  })
  .then(books => {
    dispatch(setBooks(books.items));
  })
  .catch(err => console.error(`error`, err));
};
