// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const User = db.model('')

// describe('Author routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/users/', () => {
//     const codysEmail = 'cody@puppybook.com'

//     beforeEach(() => {
//       return User.create({
//         firstName: 'Cody',
//         lastName: 'Apples',
//         email: codysEmail,
//         password: '3525'
//       })
//     })

//     it('GET /api/users', () => {
//       return request(app)
//         .get('/api/users')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body[0].email).to.be.equal(codysEmail)
//         })
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')