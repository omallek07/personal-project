const router = require('express').Router();

// router.use('/authors', require('./authors'));

// router.use('/books', require('./books'));

// router.use('/genres', require('./genres'));

//Handles API route requests that do not exist
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
