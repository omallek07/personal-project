import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { findBookDispatcher } from '../reducers/search';

class Home extends Component {
  constructor() {
    super()
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault()
    const query = evt.target.search.value;
    if (query) {
      this.props.findBookDispatcher(query);
    } else {
      alert('Please submit valid search!');
    }
  }

  render () {
    const {search} = this.props;
    console.log('props', search)
    return (
      <div className="mainDiv">
        <h1>Welcome to home page</h1>
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
              <input name="search" type="text" placeholder="Title or Author" />
            </div>
            <button type="submit">Click to Search</button>
          </form>
        </div>
        {
          (search.length === 0)
          ? <div> Search will display here:</div>
          : <div> {search.map(eachSearch => {
            return (
              <div key={eachSearch.id}>
              {eachSearch.volumeInfo.title}
               By: {eachSearch.volumeInfo.authors}
              </div>
            )
          })}
          </div>
        }
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
}

/* --------------- CONTAINER ----------------------- */

const mapState = ({search}) => ({search});
const mapDispatch = {findBookDispatcher};

export default connect(mapState, mapDispatch)(Home);
