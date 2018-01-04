import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllCollections } from '../reducers/userCollections';
import {Card, Image, Header, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class OtherUsers extends Component {

  componentDidMount() {
    this.props.fetchAllCollections()
  }

  render () {
    const users = this.props.userCollections;
    return (
      <Card.Group itemsPerRow={6}>
      {
        users.map(user => {
          return (
            <Card key={user.id} inverted className="collection">
              <Link className="avatarlink" to={{ pathname: '/singleOtherUser', state: {user} }}>
              <Image src={user.avatar} size="tiny" circular centered />
              </Link>
              <Card.Content textAlign="center">
                <Header>{user.name}</Header>
                <Card.Meta>
                  <Icon name="book" icon="tiny" />{` ${user.books.length} Books`}
                </Card.Meta>
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
