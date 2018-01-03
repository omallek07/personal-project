import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, LoginForm, Home, AllBooks, AllAuthors, AllGenres, SingleBook, SingleAuthor, SingleGenre, NewBookPage, FunFacts, OtherUsers, SingleOtherUser} from './components';
import {me} from './reducers/user';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={LoginForm} />

            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/allBooks" component={AllBooks} />
                  <Route path="/allAuthors" component={AllAuthors} />
                  <Route path="/allGenres" component={AllGenres} />
                  <Route path="/funFacts" component={FunFacts} />
                  <Route path="/otherUsers" component={OtherUsers} />
                  <Route path="/singleOtheruser" component={SingleOtherUser} />
                  <Route exact path="/books/:bookId" component={SingleBook} />
                  <Route exact path="/newBook" component={NewBookPage} />
                  <Route exact path="/authors/:authorName" component={SingleAuthor} />
                  <Route exact path="/genres/:categoryType" component={SingleGenre} />
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={LoginForm} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
