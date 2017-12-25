import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddBookCtA = () => (
    <Card className="card" centered onClick={this.isClickedHandler}>
      <Card.Content textAlign="center">
        <Card.Header>Add new book</Card.Header>
        <Link to="/newBook">
        <Icon name="plus circle" size="massive" color="blue" />
        </Link>
      </Card.Content>
    </Card>
);

export default AddBookCtA;

