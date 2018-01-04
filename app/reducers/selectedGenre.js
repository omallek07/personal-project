import axios from 'axios';

/* ------------ ACTIONS ------------ */
const GET_GENRE_BOOKS = 'GET_GENRE_BOOKS';


/* --------- ACTION CREATORS ------------ */
const getGenreBooks = books => ({ type: GET_GENRE_BOOKS, books})


/* ------------- REDUCER ------------ */
export default function reducer (books = {}, action) {
  switch (action.type) {
    case GET_GENRE_BOOKS:
      return action.books;
    default:
      return books;
  }
}

/* ------------- DISPATCHERS ------------ */
export const fetchGenreBooks = (userId, categoryType) => dispatch => {
  axios.get(`/api/singlegenre/${userId}/${categoryType}`)
  .then(res => dispatch(getGenreBooks(res.data)))
  .catch(err => console.error('Fetching genre by type unsuccessful', err));
};
