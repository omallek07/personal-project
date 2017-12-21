const { Books } = require('../db/models');
const router = require('express').Router();

// Get all Authors at api/authors
router.get('/', (req, res, next) => {
  Books.findAll({attributes: ['category']})
  .then(allGenres => {
    res.json(allGenres);
  })
  .catch(next);
})

// Get author by name at api/authors
router.get('/:categoryType', (req, res, next) => {
  Books.findAll({ where: {
    category: req.params.categoryType},
  attributes: ['title', 'coverImage', 'id']})
  .then(genre => {
    res.json(genre);
  })
  .catch(next);
})

module.exports = router;
