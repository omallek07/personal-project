const router = require('express').Router();

router.post('/', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
