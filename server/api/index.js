const router = require('express').Router();

router.use('/singlebook', require('./singlebook'));
router.use('/singleauthor', require('./singleauthor'));
router.use('/singlegenre', require('./singlegenre'));
router.use('/authors', require('./authors'));
router.use('/books', require('./books'));
router.use('/genres', require('./genres'));
router.use('/users', require('./users'));
router.use('/usercollections', require('./usercollections'));

//Handles API route requests that do not exist
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
