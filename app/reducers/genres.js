import axios from 'axios';

/* ------------ ACTIONS ------------ */

const GET_ALL_GENRES = 'GET_ALL_GENRES'
const GET_GENRE_BY_ID = 'GET_GENRE_BY_ID';
const ADD_NEW_GENRE = 'ADD_NEW_GENRE';
const DELETE_GENRE = 'DELETE_GENRE';


/* --------- ACTION CREATORS ------------ */

const getAllGenres = genres => ({ type: GET_ALL_GENRES, genres })

const getGenreByID = genre => ({ type: GET_GENRE_BY_ID, genre})

const addNewGenre = genre => ({ type: ADD_NEW_GENRE, genre })

const deleteGenre = id => ({ type: DELETE_GENRE, id })

/* ------------- REDUCER ------------ */

export default function reducer (genres = [], action) {
  switch (action.type) {
    case GET_ALL_GENRES:
      return action.genres;

    case GET_GENRE_BY_ID:
      return genres.filter(genre => genre.id === action.genre.id);

    case ADD_NEW_GENRE:
      return [action.genre, ...genres];

    case DELETE_GENRE:
      return genres.filter(genre => genre.id !== action.id);

    default:
      return genres;
  }
}

/* ------------- DISPATCHERS ------------ */

export const fetchGenres = () => dispatch => {
  axios.get('/api/genres')
  .then(res => dispatch(getAllGenres(res.data)))
  .catch(err => console.error('Fetching genres unsuccessful', err));
};

export const fetchGenreByID = (genreId) => dispatch => {
  axios.get(`/api/genres/${genreId}`)
  .then(res => dispatch(getGenreByID(res.data)))
  .catch(err => console.error('Fetching genre by ID unsuccessful', err));
};

export const deleteGenreDispatcher = id => dispatch => {
  dispatch(deleteGenre(id));
  axios.delete(`/api/genres/${id}`)
  .catch(err => console.error(`Removing genre: ${id} unsuccesful`, err));
};

export const addNewGenreDispatcher = genre => dispatch => {
  axios.post('/api/genres', genre)
  .then(res => {
    return dispatch(addNewGenre(res.data))
  })
  .catch(err => console.error(`Creating genre: ${genre} unsuccesful`, err))
};


