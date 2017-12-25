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


// // Get author by name at api/authors
// router.get('/:authorName', (req, res, next) => {
//   Books.findAll({ where: {
//     author: req.params.authorName},
//   attributes: ['title', 'coverImage', 'id']})
//   .then(author => {
//     res.json(author);
//   })
//   .catch(next);
// })

module.exports = router;
