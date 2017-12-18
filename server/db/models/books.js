'use strict';

const db = require('../index');
const Sequelize = db.Sequelize;

const Books = db.define('books', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 100],
        msg: 'Name must be between 1 and 100 characters!'
      }
    }
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  publishedDate: {
    type: Sequelize.STRING
  },
  coverImage: {
    type: Sequelize.STRING,
    defaultValue: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935'
  },
  description: {
    type: Sequelize.TEXT,
  }
});

Books.beforeValidate(book => {
  if (!book.coverImage) {
    book.coverImage = book.defaultValue;
  }
});

module.exports = Books;
