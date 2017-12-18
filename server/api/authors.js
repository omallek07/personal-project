const { Authors, Books } = require('../db/models');
const router = require('express').Router();

// Get all Authors at api/authors
router.get('/', (req, res, next) => {
  Authors.findAll({include: Books})
  .then(allAuthors => {
    res.json(allAuthors);
  })
  .catch(next);
})

// Create new author at /api/authors
router.post('/', (req, res, next) => {
  Authors.create(req.body)
    .then(newAuthor => {
     res.status(201).json(newAuthor)
    })
    .catch(err => { console.log(err) });
});

// Get author by ID at api/authors
router.get('/:authorId', (req, res, next) => {
  Authors.findById(req.params.authorId)
  .then(author => {
    res.json(author);
  })
  .catch(next);
})

// Update author's details
router.put('/:authorId', (req, res, next) => {
  Authors.update(req.body, {
    where: {
    id: req.params.authorId
    }
  })
  .then(updatedAuthor => {
    res.json(updatedAuthor);
  })
  .catch(next);
})

// DELETE /api/author
router.delete('/:authorId', (req, res, next) => {
  const id = req.params.authorId;

  Authors.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
