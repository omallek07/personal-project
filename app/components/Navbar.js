import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <h1 id="navTitle">Book Reviewer</h1>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
      <div>
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;

