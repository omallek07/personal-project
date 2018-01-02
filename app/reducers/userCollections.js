import axios from 'axios';

/* ------------ ACTIONS ------------ */

const GET_ALL_COLLECTIONS = 'GET_ALL_COLLECTIONS'

/* --------- ACTION CREATORS ------------ */

const getAllCollections = collections => ({ type: GET_ALL_COLLECTIONS, collections })

/* ------------- REDUCER ------------ */

export default function reducer (collections = [], action) {
  switch (action.type) {
    case GET_ALL_COLLECTIONS:
      return action.collections;
    default:
      return collections;
  }
}

/* ------------- DISPATCHERS ------------ */

export const fetchAllCollections = () => dispatch => {
  axios.get(`/api/usercollections`)
  .then(res => dispatch(getAllCollections(res.data)))
  .catch(err => console.error('Fetching all collections unsuccessful', err));
};
