import React from 'react';
import { Form, Button, Input, Segment } from 'semantic-ui-react';
import InlineError from './messages/InlineError';
import { connect } from 'react-redux';
import { auth } from '../reducers/user';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  onChange(evt) {
    let data = Object.assign({}, this.state.data);
    data[evt.target.name] = evt.target.value;
    this.setState({data})
  }

  validate(data) {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (!data.email) errors.email = "Can't be blank";
    return errors;
  }

  onSubmit() {
    this.setState({loading: true})
    const formName = 'login';
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.auth(this.state.data, formName)
    }
    this.setState({loading: false})
  }

  render() {
    const { data, errors} = this.state;
    const { error } = this.props

    return (
      <Segment>
      <Form onSubmit={this.onSubmit} loading={this.state.loading}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email:</label>
          <Input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          value={data.email}
          onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password:</label>
          <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={data.password}
          onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Login</Button>
        {error && error.response && <InlineError text={error.response.data} />}
      </Form>
      </Segment>
    )
  }
}


/* --------------- CONTAINER ----------------------- */

const mapLogin = (state) => {
    return {
      error: state.user.error
    }
  }

const mapDispatch = { auth }


export default connect(mapLogin, mapDispatch)(LoginForm)
