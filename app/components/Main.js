// import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Login from './Login';
// import Logout from './Logout';
// import Signup from './signup';
// import AllBooks from './AllBooks';
// import AllAuthors from './AllAuthors';
// import AllGenres from './AllGenres';
// import SingleAuthor from './SingleAuthor';
// import SingleBook from './SingleBook';
// import SingleGenre from './SingleGenre';
// import Home from './Home';

// const Root = () => (
//   <Router>
//     <div id="masterRoot">
//       <Navbar />
//       <div id="mainRoot">
//         <Sidebar />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/logout" component={Logout} />
//         <Route exact path="/allBooks" component={AllBooks} />
//         <Route exact path="/allAuthors" component={AllAuthors} />
//         <Route exact path="/authors/:authorId" component={SingleAuthor} />
//         <Route exact path="/allGenres" component={AllGenres} />
//         <Route exact path="/books/:bookId" component={SingleBook} />
//         <Route exact path="/genres/:genreId" component={SingleGenre} />
//       </div>
//     </div>
//   </Router>
// )

// export default Root;

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../reducers/user'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children} = props

  return (
    <div id="masterRoot">
      <Navbar />
      <div id="mainRoot">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
}

