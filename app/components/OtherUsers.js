import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllCollections } from '../reducers/userCollections';
import {Card, Image, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class OtherUsers extends Component {

  componentDidMount() {
    this.props.fetchAllCollections()
  }

  render () {
    const users = this.props.userCollections;
    return (
      <Card.Group itemsPerRow={4}>
      {
        users.map(user => {
          return (
            <Card key={user.id}>
              <Link to={{ pathname: '/singleOtherUser', state: {user} }}>
              <Image src={user.avatar} />
              </Link>
              <Card.Content textAlign="center">
                <Header>{user.email}</Header>
              </Card.Content>
            </Card>
          )
        })
      }
      </Card.Group>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({userCollections, user}) => ({userCollections: userCollections.filter(collection => collection.id !== user.id)});

const mapDispatch = { fetchAllCollections }

export default connect(mapState, mapDispatch)(OtherUsers);
