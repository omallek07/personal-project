/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const { Users } = require('./index')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return Users.create({
          name: 'Cody',
          email: 'cody@puppybook.com',
          password: 'bones',
          public: false
        })
          .then(user => {
            cody = user
          })
      });

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      });

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      });

      it('expects public view to be set to false', () => {
        expect(cody.public).to.be.equal(false)
      });

    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
