import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddBookCtA from './AddBookCtA';
import { Grid, Button, Header, Image, Segment, Container, Icon } from 'semantic-ui-react';
import {me} from '../reducers/user';


class Home extends Component {
  render() {
    const {user} = this.props;
    return (
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={4}>
            <Container textAlign="center">
              <Header>{`Welcome ${user.name}!`}</Header>
                <Image src={user.avatar} centered />
              </Container>
            </Grid.Column>
          <Grid.Column>
          <Container fluid>
            <Header>Start adding new books!</Header>
            <Button fluid animated link>
              <Button.Content visible>Add New Book</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </Container>
          <Container fluid>
            <Header>Check our your friend's lists!</Header>
            <Button animated fluid link>
              <Button.Content visible>Friend's Lists</Button.Content>
              <Button.Content hidden>
                <Icon name="users" />
              </Button.Content>
            </Button>
          </Container>
          <Container fluid>
            <Header>View fun facts about your collection!</Header>
            <Button animated fluid link>
              <Button.Content visible>Fun Facts</Button.Content>
              <Button.Content hidden>
                <Icon name="smile" />
              </Button.Content>
            </Button>
          </Container>
      </Grid.Column>
      </Grid>
    </Segment>
    )
  }
}

  /* --------------- CONTAINER ----------------------- */

  const mapState = ({user}) => ({user});

  const mapDispatch = ({me});

  export default connect(mapState, mapDispatch)(Home);
