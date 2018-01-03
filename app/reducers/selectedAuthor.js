import axios from 'axios';

/* ------------ ACTIONS ------------ */
const GET_AUTHORS_BOOKS = 'GET_AUTHORS_BOOKS';


/* --------- ACTION CREATORS ------------ */
const getAuthorsBooks = books => ({ type: GET_AUTHORS_BOOKS, books})


/* ------------- REDUCER ------------ */
export default function reducer (books = {}, action) {
  switch (action.type) {
    case GET_AUTHORS_BOOKS:
      return action.books;
    default:
      return books;
  }
}

/* ------------- DISPATCHERS ------------ */
export const fetchAuthorsBooks = (userId, authorName) => dispatch => {
  axios.get(`/api/singleauthor/${userId}/${authorName}`)
  .then(res => dispatch(getAuthorsBooks(res.data)))
  .catch(err => console.error('Fetching authors books unsuccessful', err));
};
