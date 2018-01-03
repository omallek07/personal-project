const { Books } = require('../db/models');
const router = require('express').Router();

// Get all Books at api/Books
router.get('/:userId', (req, res, next) => {
  Books.findAll({where: {
    userId: req.params.userId
  }})
  .then(allBooks => {
    return res.json(allBooks);
  })
  .catch(next);
})

// Create new book at /api/Books
router.post('/', (req, res, next) => {
  Books.create(req.body)
    .then(newBook => {
     res.status(201).json(newBook)
    })
    .catch(err => { console.log(err) });
});


module.exports = router;
