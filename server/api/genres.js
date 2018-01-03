const { Books } = require('../db/models');
const router = require('express').Router();

// Get all Genres at api/authors
router.get('/:userId', (req, res, next) => {
  Books.findAll({where: {
    userId: req.params.userId },
    attributes: ['category']})
  .then(allGenres => {
    res.json(allGenres);
  })
  .catch(next);
})


module.exports = router;
