const db = require('./server/db/index');
const {Books, Authors, Genres} = require('./server/db/models');

const books = [
  { title: 'Pluto Academy', coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg/450px-Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg', description: 'This academy is the best!', pages: 200, authorId: 1, genreId: 1 },
  { title: 'Saturn University', coverImage: 'https://nssdc.gsfc.nasa.gov/planetary/banner/saturn.gif', description: 'This University rules!', pages: 200, authorId: 2, genreId: 2 },
  { title: 'Mars Planet', coverImage: 'https://solarsystem.nasa.gov/covers/planets/mars-globe-valles-marineris-enhanced_348.jpg', description: 'This Planet is the bomb!', pages: 200, authorId: 5, genreId: 3 },
  { title: 'Earth Institute', coverImage: '', description: 'This Institute is awesome!', pages: 200, authorId: 7, genreId: 3 },
  { title: 'Venus Institute', coverImage: '', description: 'This Institute is awesome!', pages: 500, authorId: 3, genreId: 2 },
  { title: 'Pluto Institute', coverImage: '', description: 'This Institute is awesome!', pages: 700, authorId: 2, genreId: 1 },
  { title: 'Saturn Institute', coverImage: '', description: 'This Institute is awesome!', pages: 100, authorId: 4, genreId: 4 },
];

const authors = [{
  firstName: 'Cody',
  lastName: 'Smith',
}, {
  firstName: 'Sam',
  lastName: 'Apple',
}, {
  firstName: 'Tina',
  lastName: 'Turner',
}, {
  firstName: 'Richard',
  lastName: 'Little',
}, {
  firstName: 'Lisa',
  lastName: 'Lampey',
}, {
  firstName: 'Pat',
  lastName: 'Thompson',
}, {
  firstName: 'Henry',
  lastName: 'Best',
}, {
  firstName: 'Kyle',
  lastName: 'Apple',
}, {
  firstName: 'Tony',
  lastName: 'Bananas',
}, {
  firstName: 'Samuel',
  lastName: 'Happy',
}, {
  firstName: 'Kevin',
  lastName: 'Peanut',
}, {
  firstName: 'Lori',
  lastName: 'Cup',
}, {
  firstName: 'Liam',
  lastName: 'Neeson',
}, {
  firstName: 'Janet',
  lastName: 'Floor',
}, {
  firstName: 'Jack',
  lastName: 'Black',
}, {
  firstName: 'Katie',
  lastName: 'Pup',
}];

const genres = [
 { type: 'Action'
}, {
  type: 'Horror'
}, {
  type: 'Romance'
}, {
  type: 'Mystery'
}, {
  type: 'History'
}, {
  type: 'Science Fiction'
}, {
  type: 'Western'
}
]

const seed = () =>
  Promise.all(authors.map(author =>
    Authors.create(author))
  )
  .then(() =>
  Promise.all(genres.map(genre =>
    Genres.create(genre))
  )
  .then(() =>
  Promise.all(books.map(book =>
    Books.create(book))
  ))
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
