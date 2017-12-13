'use strict';

const db = require('../index');
const Sequelize = db.Sequelize;

const Authors = db.define('authors', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 15],
        msg: 'Name must be between 1 and 15 characters'
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 20],
        msg: 'Last name must be between 1 and 20 characters'
      }
    }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get: function () {
      return this.firstName + ' ' + this.lastName;
    }
  }
});

module.exports = Authors;
