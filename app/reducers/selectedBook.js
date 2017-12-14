import axios from 'axios';

/* ------------ ACTIONS ------------ */
const GET_BOOK_BY_ID = 'GET_BOOK_BY_ID';


/* --------- ACTION CREATORS ------------ */
const getBookByID = book => ({ type: GET_BOOK_BY_ID, book})


/* ------------- REDUCER ------------ */
export default function reducer (book = {}, action) {
  switch (action.type) {
    case GET_BOOK_BY_ID:
      return action.book;
    default:
      return book;
  }
}

/* ------------- DISPATCHERS ------------ */
export const fetchBookByID = (bookId) => dispatch => {
  axios.get(`/api/books/${bookId}`)
  .then(res => dispatch(getBookByID(res.data)))
  .catch(err => console.error('Fetching book by ID unsuccessful', err));
};
