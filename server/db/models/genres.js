'use strict';

const db = require('../index');
const Sequelize = db.Sequelize;

const Genres = db.define('genres', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
   }
})

// module.exports = Genres;
