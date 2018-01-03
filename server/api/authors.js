const { Books } = require('../db/models');
const router = require('express').Router();

// Get all Authors at api/authors
router.get('/:userId', (req, res, next) => {
  Books.findAll({where: {
    userId: req.params.userId },
    attributes: ['author']})
  .then(allAuthors => {
    res.json(allAuthors);
  })
  .catch(next);
})


module.exports = router;
