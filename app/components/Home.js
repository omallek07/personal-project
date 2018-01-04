import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddBookCtA from './AddBookCtA';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';
import {me} from '../reducers/user';


class Home extends Component {
  render() {
    const {user} = this.props;
    return (
      <Segment color="orange">
      <Grid columns={2} divided>
      <Grid.Column>
        <Header>{`Welcome ${user.name}!`}</Header>
        <Image src={user.avatar} floated="left" circular />
      </Grid.Column>
      <Grid.Column>
        <AddBookCtA />
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
