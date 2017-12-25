'use strict';

const db = require('../index');
const Books = require('./books');
const Users = require('./users');

Books.belongsTo(Users)
Users.hasMany(Books)


module.exports = {
	db,
	Books,
  Users
};
