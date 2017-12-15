// const crypto = require('crypto');
// const _ = require('lodash');
// const Sequelize = require('sequelize');

// const db = require('../index');

// const User = db.define('user', {
//   email: {
//     type: Sequelize.STRING,
//     unique: true,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.STRING
//   },
//   salt: {
//     type: Sequelize.STRING
//   }
// }, {
//   hooks: {
//     beforeCreate: setSaltAndPassword,
//     beforeUpdate: setSaltAndPassword
//   }
// });

// // instance methods
// User.prototype.correctPassword = function (candidatePassword) {
//   return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
// };

// User.prototype.sanitize = function () {
//   return _.omit(this.toJSON(), ['password', 'salt']);
// };

// // class methods
// User.generateSalt = function () {
//   return crypto.randomBytes(16).toString('base64');
// };

// User.encryptPassword = function (plainText, salt) {
//   const hash = crypto.createHash('sha1');
//   hash.update(plainText);
//   hash.update(salt);
//   return hash.digest('hex');
// };

// function setSaltAndPassword (user) {
//   // we need to salt and hash again when the user enters their password for the first time
//   // and do it again whenever they change it
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password, user.salt)
//   }

// }

// module.exports = User;
const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../index')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

/**
 * classMethods
 */
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

