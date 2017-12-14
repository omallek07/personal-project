import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mainDiv">
      <h1>Welcome to home page</h1>
      <div>
        <Link to="/allBooks">
          <button>Click to see all books</button>
        </Link>
      </div>
      <div>
        <Link to="/allAuthors">
          <button>Click to see all authors</button>
        </Link>
      </div>
      <div>
        <Link to="/allGenres">
          <button>Click to see all genres</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
