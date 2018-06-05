import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Button, Header, Image, Segment, Container, Icon } from 'semantic-ui-react';

const Home = (props) => {
  const {user} = props;
  return (
    <Segment>
      <Grid columns={2} divided stackable>
        <Grid.Column width={4}>
          <Container textAlign="center">
            <Header id="home-welcomeSign">{`Welcome ${user.name}!`}</Header>
              <Image src={user.avatar} centered />
            </Container>
          </Grid.Column>
        <Grid.Column width={12}>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={12}>
            <Header>Start adding new books!</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Link to="/newBook">
              <Button size="big" animated fluid link>
                <Button.Content visible>Add New Book</Button.Content>
                <Button.Content hidden>
                  <Icon name="right arrow" />
                </Button.Content>
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <Header>Check out your friend's lists!</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Link to="/otherUsers">
              <Button size="big" animated fluid link>
                <Button.Content visible>Friend's Lists</Button.Content>
                <Button.Content hidden>
                  <Icon name="users" />
                </Button.Content>
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <Header>View fun facts about your collection!</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Link to="/funFacts">
              <Button size="big" fluid animated link>
                <Button.Content visible>Fun Facts</Button.Content>
                <Button.Content hidden>
                  <Icon name="smile" />
                </Button.Content>
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid>
  </Segment>
  )
}

  /* --------------- CONTAINER ----------------------- */

  const mapState = ({user}) => ({user});

  export default connect(mapState, null)(Home);
