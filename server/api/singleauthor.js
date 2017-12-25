const { Books } = require('../db/models');
const router = require('express').Router();

// Get author by name at api/authors
router.get('/:userId/:authorName', (req, res, next) => {
  Books.findAll({ where: {
    userId: req.params.userId,
    author: req.params.authorName},
  attributes: ['title', 'coverImage', 'id']})
  .then(author => {
    res.json(author);
  })
  .catch(next);
})

module.exports = router;
