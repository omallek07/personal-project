const router = require('express').Router();
const User = require('../db/models/users.js');

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

module.exports = router;
