import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddBookCtA from './AddBookCtA';
import { Divider, Button } from 'semantic-ui-react';


const Home = () => {
  return (
    <div id="homeDiv">
      <AddBookCtA />
    </div>
  )
}

  /* --------------- CONTAINER ----------------------- */

  const mapState = null;

  const mapDispatch = null;

  export default connect(mapState, mapDispatch)(Home);

  // <div>
  //   <Link to="/allBooks">
  //     <button>Click to see all books</button>
  //   </Link>
  // </div>
  // <div>
  //   <Link to="/allAuthors">
  //     <button>Click to see all authors</button>
  //   </Link>
  // </div>
  // <div>
  //   <Link to="/allGenres">
  //     <button>Click to see all genres</button>
  //   </Link>
  // </div>
