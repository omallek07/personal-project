import axios from 'axios';

/* ------------ ACTIONS ------------ */
const GET_AUTHOR_BY_ID = 'GET_AUTHOR_BY_ID';


/* --------- ACTION CREATORS ------------ */
const getAuthorByID = author => ({ type: GET_AUTHOR_BY_ID, author})


/* ------------- REDUCER ------------ */
export default function reducer (author = {}, action) {
  switch (action.type) {
    case GET_AUTHOR_BY_ID:
      return action.author;
    default:
      return author;
  }
}

/* ------------- DISPATCHERS ------------ */
export const fetchAuthorByID = (authorId) => dispatch => {
  axios.get(`/api/authors/${authorId}`)
  .then(res => dispatch(getAuthorByID(res.data)))
  .catch(err => console.error('Fetching author by ID unsuccessful', err));
};
