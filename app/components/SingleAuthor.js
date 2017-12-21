import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAuthorByName } from '../reducers/selectedAuthor';
import { Segment, Grid, Image, Container, Button } from 'semantic-ui-react';

/* -----------    COMPONENT    ----------- */

class singleAuthor extends Component {
  constructor({isHovering=false}) {
    super()
  }

  componentWillMount () {
    const authorName = this.props.match.params.authorName;
    this.props.fetchAuthorByName(authorName)
  }

  render () {
    let authorBooks = this.props.selectedAuthor;
    const authorName = this.props.match.params.authorName;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment textAlign="center">
              <h1 className="title">{`All books from ${authorName}`}</h1>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        {
          authorBooks.length > 0 && authorBooks.map(books => {
            return (
              <Grid.Column key={books.title} container width={4} fluid>
                  <Link to={`/books/${books.id}`}>
                    <Segment className="allBooksSeg">
                      <Container textAlign="center">
                        <b> {books.title} </b>
                      </Container>
                      <Image src={books.coverImage} centered />
                    </Segment>
                  </Link>
              </Grid.Column>
            )
          })
        }
        <Grid.Row>
          <Grid.Column>
            <Container>
              <Link className="mainLink" to="/allAuthors" >
                <Button>Go Back</Button>
              </Link>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({selectedAuthor}, ownProps) => ({selectedAuthor, ownProps})

const mapDispatch = { fetchAuthorByName }

export default connect(mapState, mapDispatch)(singleAuthor);
