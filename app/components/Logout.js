import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div className="mainDiv">
      <h1>Please logout here</h1>
      <div>
        <Link to="/">
          <button>Click to go to home page</button>
        </Link>
      </div>
    </div>
  )
}

export default Logout;
