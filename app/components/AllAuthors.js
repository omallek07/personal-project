import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class allAuthors extends Component {

  render () {
  return (
    <div>
      <h1>All Authors</h1>
    </div>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = null;

const mapDispatch = null;

export default connect(mapState, mapDispatch)(allAuthors);

