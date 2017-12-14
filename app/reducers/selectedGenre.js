import axios from 'axios';

/* ------------ ACTIONS ------------ */
const GET_GENRE_BY_ID = 'GET_GENRE_BY_ID';


/* --------- ACTION CREATORS ------------ */
const getGenreByID = genre => ({ type: GET_GENRE_BY_ID, genre})


/* ------------- REDUCER ------------ */
export default function reducer (genre = {}, action) {
  switch (action.type) {
    case GET_GENRE_BY_ID:
      return action.genre;
    default:
      return genre;
  }
}

/* ------------- DISPATCHERS ------------ */
export const fetchGenreByID = (genreId) => dispatch => {
  axios.get(`/api/genres/${genreId}`)
  .then(res => dispatch(getGenreByID(res.data)))
  .catch(err => console.error('Fetching genre by ID unsuccessful', err));
};
