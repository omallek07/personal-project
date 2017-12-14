import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Login from './Login';
import Logout from './Logout';
import Signup from './signup';
import AllBooks from './AllBooks';
import AllAuthors from './AllAuthors';
import AllGenres from './AllGenres';
import SingleAuthor from './SingleAuthor';
import SingleBook from './SingleBook';
import SingleGenre from './SingleGenre';
import Home from './Home';

const Root = () => (
  <Router>
    <div id="masterRoot">
      <Navbar />
      <div id="mainRoot">
        <Sidebar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/allBooks" component={AllBooks} />
        <Route exact path="/allAuthors" component={AllAuthors} />
        <Route exact path="/authors/:authorId" component={SingleAuthor} />
        <Route exact path="/allGenres" component={AllGenres} />
        <Route exact path="/books/:bookId" component={SingleBook} />
        <Route exact path="/genres/:genreId" component={SingleGenre} />
      </div>
    </div>
  </Router>
)

export default Root;
