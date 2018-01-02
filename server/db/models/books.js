'use strict';

const db = require('../index');
const Sequelize = db.Sequelize;

const Books = db.define('books', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
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
  },
  pageCount: {
    type: Sequelize.INTEGER
  },
  category: {
    type: Sequelize.STRING,
    defaultValue: 'Fiction'
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
});

Books.beforeValidate(book => {
  if (Array.isArray(book.category)){
    book.category = book.category[0];
  }
});

Books.beforeValidate(book => {
  if (!book.coverImage) {
    book.coverImage = book.defaultValue;
  }
});

Books.beforeValidate(book => {
  if (!book.category) {
    book.category = book.defaultValue;
  }
});

module.exports = Books;
