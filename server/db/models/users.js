const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../index')

const User = db.define('user', {
  avatar: {
    type: Sequelize.STRING,
    defaultValue: 'https://cms-assets.tutsplus.com/uploads/users/107/posts/25507/image/36-flat-professions-avatars-icons.jpg'
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
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

// name: {
//   type: Sequelize.STRING,
//   unique: true,
//   allowNull: false,
//   validate: {
//     len: {
//       args: [1, 25],
//       msg: 'Name must be between 1 and 25 characters!'
//     }
//   }
// },
