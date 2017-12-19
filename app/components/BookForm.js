import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid, Image, Segment } from 'semantic-ui-react';
import InlineError from './messages/InlineError';

class BookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        id: this.props.book.id,
        title: this.props.book.volumeInfo.title,
        author: this.props.book.volumeInfo.authors[0],
        publishedDate: this.props.book.volumeInfo.publishedDate,
        coverImage: this.props.book.volumeInfo.imageLinks.smallThumbnail,
        description: this.props.book.searchInfo.textSnippet,
        pageCount: this.props.book.volumeInfo.pageCount,
        category: 'Please label genre'
      },
      loading: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  onChange(e) {
    let data = Object.assign({}, this.state.data);
    data[e.target.name] = e.target.value;
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
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} fluid="true" stackable>
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
            <label htmlFor="pageCount">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              value={data.category}
              onChange={this.onChange}
            />
            {errors.category && <InlineError text={errors.category} /> }
          </Form.Field>
          </Grid.Column>

          <Grid.Column>
            <Image size="small" src={data.coverImage} />
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button>Save</Button>
          </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

BookForm.propTypes = {
  submit: PropTypes.func.isRequired,
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    publishedDate: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pageCount: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  })
}

export default BookForm;
