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
