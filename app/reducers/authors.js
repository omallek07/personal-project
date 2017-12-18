import axios from 'axios';

/* ------------ ACTIONS ------------ */

const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS'
const ADD_NEW_AUTHOR = 'ADD_NEW_AUTHOR';
const EDIT_AUTHOR_INFO = 'EDIT_AUTHOR_INFO';
const DELETE_AUTHOR = 'DELETE_AUTHOR';


/* --------- ACTION CREATORS ------------ */

const getAllAuthors = authors => ({ type: GET_ALL_AUTHORS, authors })

const addNewAuthor = author => ({ type: ADD_NEW_AUTHOR, author })

const editAuthorInfo = author => ({ type: EDIT_AUTHOR_INFO, author })

const deleteAuthor = id => ({ type: DELETE_AUTHOR, id })

/* ------------- REDUCER ------------ */

export default function reducer (authors = [], action) {
  switch (action.type) {
    case GET_ALL_AUTHORS:
      return action.authors;

    case ADD_NEW_AUTHOR:
      return [action.author, ...authors];

    case EDIT_AUTHOR_INFO:
      return authors.map(author => (
        action.author.id === author.id ? action.author : author
      ));

    case DELETE_AUTHOR:
      return authors.filter(author => author.id !== action.id);

    default:
      return authors;
  }
}

/* ------------- DISPATCHERS ------------ */

export const fetchAuthors = () => dispatch => {
  axios.get('/api/authors')
  .then(res => dispatch(getAllAuthors(res.data)))
  .catch(err => console.error('Fetching author unsuccessful', err));
};

export const deleteAuthorDispatcher = id => dispatch => {
  dispatch(deleteAuthor(id));
  axios.delete(`/api/authors/${id}`)
  .catch(err => console.error(`Removing author: ${id} unsuccesful`, err));
};

export const addNewAuthorDispatcher = author => dispatch => {
  axios.post('/api/authors', author)
  .then(res => {
    return dispatch(addNewAuthor(res.data))
  })
  .catch(err => console.error(`Creating author: ${author} unsuccesful`, err))
};

export const editAuthorInfoDispatcher = (id, info) => dispatch => {
  axios.put(`/api/authors/${id}`, info)
  .then(res => dispatch(editAuthorInfo(res.data)))
  .catch(err => console.error(`Updating author: ${info} unsuccesful`, err));
};
