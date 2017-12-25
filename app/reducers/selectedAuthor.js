import axios from 'axios';

/* ------------ ACTIONS ------------ */
const GET_AUTHOR_BY_NAME = 'GET_AUTHOR_BY_NAME';


/* --------- ACTION CREATORS ------------ */
const getAuthorByName = author => ({ type: GET_AUTHOR_BY_NAME, author})


/* ------------- REDUCER ------------ */
export default function reducer (author = {}, action) {
  switch (action.type) {
    case GET_AUTHOR_BY_NAME:
      return action.author;
    default:
      return author;
  }
}

/* ------------- DISPATCHERS ------------ */
export const fetchAuthorByName = (userId, authorName) => dispatch => {
  axios.get(`/api/singleauthor/${userId}/${authorName}`)
  .then(res => dispatch(getAuthorByName(res.data)))
  .catch(err => console.error('Fetching author by name unsuccessful', err));
};
