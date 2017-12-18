'use strict';

const db = require('../index');
const Books = require('./books');
// const Authors = require('./authors');
// const Genres = require('./genres');
const Users = require('./users');


// Authors.hasMany(Books, {
// 	foreignKey: 'authorId',
// 	onDelete: 'cascade',
// 	hooks: true
// });

// Books.belongsTo(Authors);
// Books.belongsTo(Genres);

// Genres.hasMany(Books, {
//   foreignKey: 'genreId'
// })

module.exports = {
	db,
	Books,
  // Authors,
  // Genres,
  Users
};
