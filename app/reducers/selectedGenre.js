import axios from 'axios';

/* ------------ ACTIONS ------------ */
const GET_GENRE_BY_TYPE = 'GET_GENRE_BY_TYPE';


/* --------- ACTION CREATORS ------------ */
const getGenreByType = genre => ({ type: GET_GENRE_BY_TYPE, genre})


/* ------------- REDUCER ------------ */
export default function reducer (genre = {}, action) {
  switch (action.type) {
    case GET_GENRE_BY_TYPE:
      return action.genre;
    default:
      return genre;
  }
}

/* ------------- DISPATCHERS ------------ */
export const fetchGenreByType = (categoryType) => dispatch => {
  axios.get(`/api/genres/${categoryType}`)
  .then(res => dispatch(getGenreByType(res.data)))
  .catch(err => console.error('Fetching genre by type unsuccessful', err));
};
