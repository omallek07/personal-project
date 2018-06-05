import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllCollections } from '../reducers/userCollections';
import {Card, Image, Popup, Icon, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class OtherUsers extends Component {

  componentDidMount() {
    this.props.fetchAllCollections()
  }

  render () {
    const users = this.props.userCollections;
    return (
      <Segment>
      <Card.Group itemsPerRow={6}>
        {
          users.map(user => {
            return (
              <Popup
              key={user.id}
              trigger={
              <Card className="collection">
                <Link className="avatarlink" to={{ pathname: '/friendsBookList', state: {user} }}>
                  <Image src={user.avatar} size="small" circular centered />
                  <Card.Content textAlign="center">
                    {user.name}
                  <Card.Meta>
                    <Icon name="book" icon="tiny" />{` ${user.books.length} Books`}
                  </Card.Meta>
                  </Card.Content>
                </Link>
              </Card>
              }
              size="tiny"
              >
              <Popup.Header>
              Click to see my collection!
              </Popup.Header>
              </Popup>
            )
          })
        }
      </Card.Group>
    </Segment>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({userCollections, user}) => ({userCollections: userCollections.filter(collection => collection.id !== user.id)});

const mapDispatch = { fetchAllCollections }

export default connect(mapState, mapDispatch)(OtherUsers);
