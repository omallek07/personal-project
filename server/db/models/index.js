'use strict';

const db = require('../index');
const Books = require('./books');
const Authors = require('./authors');
const Genres = require('./genres');


Authors.hasMany(Books, {
	foreignKey: 'authorId',
	onDelete: 'cascade',
	hooks: true
});

Genres.hasMany(Books, {
  foreignKey: 'genreId'
})

module.exports = {
	db,
	Books,
  Authors,
  Genres
};