import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddBookCtA from './AddBookCtA';
import { Grid, Header, Image, Segment, Container } from 'semantic-ui-react';
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
        <Container>
          <AddBookCtA />
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
