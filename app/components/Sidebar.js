import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar">
      Sidebar
      <div>
        <Link to="/allBooks">
          All Books
        </Link>
      </div>
      <div>
        <Link to="/allAuthors">
          All Authors
        </Link>
      </div>
      <div>
        <Link to="/allGenres">
          All Genres
        </Link>
      </div>
    </div>
  )
}

export default Sidebar;
