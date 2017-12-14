import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="mainDiv">
      <h1>Please login here</h1>
      <div>
        <Link to="/">
          <button>Click to go to home page</button>
        </Link>
      </div>
    </div>
  )
}

export default Login;
