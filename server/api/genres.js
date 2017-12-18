const { Genres, Books } = require('../db/models');
const router = require('express').Router();

// Get all Genres at api/Genres
router.get('/', (req, res, next) => {
  Genres.findAll({include: Books})
  .then(allGenres => {
    res.json(allGenres);
  })
  .catch(next);
})

// Create new book at /api/Genres
router.post('/', (req, res, next) => {
  Genres.create(req.body)
    .then(newGenre => {
     res.status(201).json(newGenre)
    })
    .catch(err => { console.log(err) });
});

// Get Genre by ID at api/Genres
router.get('/:genreId', (req, res, next) => {
  Genres.findById(req.params.genreId)
  .then(genre => {
    res.json(genre);
  })
  .catch(next);
})

// DELETE /api/genre
router.delete('/:genreId', (req, res, next) => {
  const id = req.params.genreId;

  Genres.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
