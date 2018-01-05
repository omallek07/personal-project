import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid, Image, Segment, Rating } from 'semantic-ui-react';
import InlineError from './messages/InlineError';
import { connect } from 'react-redux';

class BookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        id: this.props.book.id += this.props.user,
        title: this.props.book.volumeInfo.title,
        author: this.props.book.volumeInfo.authors[0],
        publishedDate: this.props.book.volumeInfo.publishedDate,
        coverImage: this.props.book.volumeInfo.imageLinks.thumbnail,
        description: this.props.book.volumeInfo.description || this.props.book.searchInfo.textSnippet || null,
        pageCount: this.props.book.volumeInfo.pageCount,
        category: this.props.book.volumeInfo.categories,
        rating: 3,
        userId: this.props.user
      },
      loading: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.onRatingHandler = this.onRatingHandler.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        id: props.book.id,
        title: props.book.volumeInfo.title,
        author: props.book.volumeInfo.authors[0],
        publishedDate: props.book.volumeInfo.publishedDate,
        coverImage: props.book.volumeInfo.imageLinks.smallThumbnail,
        description: props.book.volumneInfo.description || this.props.book.searchInfo.textSnippet || null,
        pageCount: props.book.volumeInfo.pageCount,
        category: props.book.volumeInfo.categories,
        rating: 3
      }
    });
  }

  onChange(e) {
    let data = Object.assign({}, this.state.data);
    data[e.target.name] = e.target.value;
    this.setState({data})
  }

  onRatingHandler(e, value) {
    let data = Object.assign({}, this.state.data);
    data.rating = value.rating;
    this.setState({data})
  }

  onSubmit(e) {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});

    if (Object.keys(errors).length === 0) {
      this.setState({loading: true})
      this.props
      .submit(this.state.data)
      this.setState({loading: false})
      }
    }

  validate(data) {
    const errors = {};
    if (!data.category) errors.category = "Can't be blank";
    if (!data.title) errors.title = "Can't be blank";
    if (!data.author) errors.author = "Can't be blank";
    return errors;
  }

  render () {
    const { errors, data, loading } = this.state;
    return (
      <Segment className="innersegment">
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} fluid="true" stackable padded>
            <Grid.Row>
              <Grid.Column>
              <Form.Field error={!!errors.title}>
                <label htmlFor="title">Book Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={data.title}
                  onChange={this.onChange}
                />
                {errors.title && <InlineError text={errors.title} /> }
              </Form.Field>

              <Form.Field error={!!errors.author}>
              <label htmlFor="authors">Book Author</label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Author"
                value={data.author}
                onChange={this.onChange}
              />
              {errors.author && <InlineError text={errors.author} /> }
            </Form.Field>

            <Form.Field error={!!errors.category}>
            <label htmlFor="category">Genre</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Genre"
              value={data.category}
              onChange={this.onChange}
            />
            {errors.category && <InlineError text={errors.category} /> }
          </Form.Field>

          <Form.Field error={!!errors.rating}>
          <label htmlFor="rating">Rating</label>
          <Rating
            icon="star"
            defaultRating={3}
            maxRating={5}
            id="rating"
            name="rating"
            value={data.rating}
            onRate={this.onRatingHandler}
          />
          {errors.rating && <InlineError text={errors.rating} /> }
        </Form.Field>
          </Grid.Column>

          <Grid.Column>
            <Image size="small" src={data.coverImage} />
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button primary>Save</Button>
          </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

BookForm.propTypes = {
  submit: PropTypes.func.isRequired,
}


/* --------------- CONTAINER ----------------------- */

const mapState = ({user}) => ({user: user.id});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(BookForm);

