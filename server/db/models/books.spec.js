/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const { Books } = require('./index')

describe('Book model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let book;

      beforeEach(() => {
        return Books.create({
          id: '313fdsf',
          title: 'History Book',
          author: 'John Doe',
          description: 'It is about history',
          rating: 4,
          category: 'History'
        })
          .then(testBook => {
            book = testBook
          })
      });

      it('category holds correct genre passed in', () => {
        expect(book.category).to.be.equal('History')
      });

    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
