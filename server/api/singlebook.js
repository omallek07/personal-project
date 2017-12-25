const { Books } = require('../db/models');
const router = require('express').Router();

// Get book by ID at api/Books
router.get('/:bookId', (req, res, next) => {
  Books.findById(req.params.bookId)
  .then(book => {
    res.json(book);
  })
  .catch(next);
})

// Update book's details
router.put('/:bookId', (req, res, next) => {
  Books.update(req.body, {
    where: {
    id: req.params.bookId
    }
  })
  .then(updatedbook => {
    res.json(updatedbook);
  })
  .catch(next);
})

// DELETE /api/book
router.delete('/:bookId', (req, res, next) => {
  const id = req.params.bookId;

  Books.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
