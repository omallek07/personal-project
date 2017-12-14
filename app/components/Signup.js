import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="mainDiv">
      <h1>Please signup here</h1>
      <div>
        <Link to="/">
          <button>Click to go to home page</button>
        </Link>
      </div>
    </div>
  )
}

export default Signup;
