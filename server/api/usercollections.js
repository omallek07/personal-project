const router = require('express').Router()
const {Users, Books} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Users.findAll({ where: {
    public: true
    },
    attributes: ['id', 'name', 'avatar', 'email'],
    include: [{model: Books,
    attributes: ['userId', 'title', 'coverImage']
    }]
  })
  .then(collections => res.json(collections))
  .catch(next)
})

