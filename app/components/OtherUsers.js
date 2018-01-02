import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllCollections } from '../reducers/userCollections';
import {Card, Image, Header} from 'semantic-ui-react';


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
              <Image src={user.avatar} />
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
const mapState = ({userCollections}) => ({userCollections});

const mapDispatch = { fetchAllCollections }

export default connect(mapState, mapDispatch)(OtherUsers);
