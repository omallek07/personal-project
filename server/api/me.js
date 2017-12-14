const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
