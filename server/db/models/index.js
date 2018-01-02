'use strict';

const db = require('../index');
const Books = require('./books');
const Users = require('./users');

Users.hasMany(Books)

module.exports = {
	db,
	Books,
  Users
};
