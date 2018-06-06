import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../reducers/user'
import { Menu, Icon, Header } from 'semantic-ui-react';

const titleBar = (props) => {
  const {handleClick, isLoggedIn} = props
  return (
    <Menu primary borderless id="title-bar">
      <Menu.Menu>
        <Menu.Item>
          <Header id="title-bar-header">
            <Icon name="book" size="big" />
              MyBooks
          </Header>
        </Menu.Item>
      </Menu.Menu>
      {
        isLoggedIn
          ? <Menu.Menu position="right">
            <Menu.Item id="title-bar--navLinks" as={Link} to="/home">Home</Menu.Item>
            <Menu.Item id="title-bar--navLinks" as={Link} to="/login" onClick={handleClick}>Logout</Menu.Item>
          </Menu.Menu>
          : <Menu.Menu position="right">
            {/* The navbar will show these links before you log in */}
            <Menu.Item id="title-bar--navLinks" as={Link} to="/login">Login</Menu.Item>
            <Menu.Item id="title-bar--navLinks" as={Link} to="/signup">Sign Up</Menu.Item>
          </Menu.Menu>
      }
    </Menu>
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
export default withRouter(connect(mapState, mapDispatch)(titleBar))

/**
 * PROP TYPES
 */
titleBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
