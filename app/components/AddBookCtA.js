import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddBookCtA = () => (
  <Card>
    <Link to="/newBook">
      <Card.Content textAlign="center">
        <Card.Header>Add new book</Card.Header>
        <Icon name="plus circle" size="large" />
      </Card.Content>
    </Link>
  </Card>
);

export default AddBookCtA;

