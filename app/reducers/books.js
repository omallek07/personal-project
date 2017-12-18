import axios from 'axios';

/* ------------ ACTIONS ------------ */

const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
const ADD_NEW_BOOK = 'ADD_NEW_BOOK';
const EDIT_BOOK_INFO = 'EDIT_BOOK_INFO';
const DELETE_BOOK = 'DELETE_BOOK';


/* --------- ACTION CREATORS ------------ */

const getAllBooks = books => ({ type: GET_ALL_BOOKS, books })

const addNewBook = book => ({ type: ADD_NEW_BOOK, book })

const editBookInfo = book => ({ type: EDIT_BOOK_INFO, book })

const deleteBook = id => ({ type: DELETE_BOOK, id })

/* ------------- REDUCER ------------ */

export default function reducer (books = [], action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return action.books;

    case ADD_NEW_BOOK:
      return [action.book, ...books];

    case EDIT_BOOK_INFO:
      return books.map(book => (
        action.book.id === book.id ? action.book : book
      ));

    case DELETE_BOOK:
      return books.filter(book => book.id !== action.id);

    default:
      return books;
  }
}

/* ------------- DISPATCHERS ------------ */

export const fetchBooks = () => dispatch => {
  axios.get('/api/books')
  .then(res => dispatch(getAllBooks(res.data)))
  .catch(err => console.error('Fetching books unsuccessful', err));
};

export const deleteBookDispatcher = id => dispatch => {
  dispatch(deleteBook(id));
  axios.delete(`/api/books/${id}`)
  .catch(err => console.error(`Removing book: ${id} unsuccesful`, err));
};

export const addNewBookDispatcher = book => dispatch => {
  axios.post('/api/books', book)
  .then(res => {
    return dispatch(addNewBook(res.data))
  })
  .catch(err => console.error(`Creating book: ${book} unsuccesful`, err))
};

export const editBookInfoDispatcher = (id, info) => dispatch => {
  axios.put(`/api/books/${id}`, info)
  .then(res => dispatch(editBookInfo(res.data)))
  .catch(err => console.error(`Updating book: ${info} unsuccesful`, err));
};
