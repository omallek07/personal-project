const { Books } = require('../db/models');
const router = require('express').Router();

// Get author by name at api/authors
router.get('/:userId/:categoryType', (req, res, next) => {
  Books.findAll({ where: {
    userId: req.params.userId,
    category: req.params.categoryType},
  attributes: ['title', 'coverImage', 'id']})
  .then(genre => {
    res.json(genre);
  })
  .catch(next);
})


module.exports = router;
