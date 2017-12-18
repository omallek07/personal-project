import React from 'react';
import { connect } from 'react-redux';

const SearchDisplay = () => {
  const {search} = this.props;
  if (!search) return <div><p>Loading...</p></div>
  return (
    <div>
      <ul>
      {
        search.map(searchResult => {
          return (
            <li key={searchResult.id}>
              {searchResult.volumeInfo.title}
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}

/* --------------- CONTAINER ----------------------- */

const mapState = ({search}) => ({search});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SearchDisplay);
