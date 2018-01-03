import React from 'react';
import { Form, Button, Input, Checkbox, Radio, Segment, Image} from 'semantic-ui-react';
import InlineError from './messages/InlineError';
import { connect } from 'react-redux';
import { auth } from '../reducers/user';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: '',
        avatar: '',
        email: '',
        public: false,
        password: '',
      },
      loading: false,
      value: {},
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  onChange(evt) {
    let data = Object.assign({}, this.state.data);
    data[evt.target.name] = evt.target.value;
    this.setState({data})
  }

  handleChange(evt, {value}) {
    this.setState({value});
    let data = Object.assign({}, this.state.data);
    data.avatar = value;
    this.setState({data});
  }

  handleToggle(evt, value) {
    let data = Object.assign({}, this.state.data);
    data.public = value.checked;
    this.setState({data});
  }

  validate(data) {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (!data.email) errors.email = "Can't be blank";
    if (!data.name) errors.name = "Please include your name";
    if (!data.avatar) errors.avatar = "Please choose an avatar";
    return errors;
  }

  onSubmit() {
    this.setState({loading: true})
    const formName = 'signup';
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.auth(this.state.data, formName)
    }
    this.setState({loading: false})
  }

  render() {
    const { data, value, errors} = this.state;
    const { error } = this.props

    return (
      <Segment color="orange">
      <Form onSubmit={this.onSubmit} loading={this.state.loading}>
        <Form.Field error={!!errors.name}>
          <label htmlFor="name">Name:</label>
          <Input
          type="name"
          id="name"
          name="name"
          placeholder="Please enter your first name"
          value={data.name}
          onChange={this.onChange}
          />
          {errors.name && <InlineError text={errors.name} />}
        </Form.Field>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email:</label>
          <Input
          type="email"
          id="email"
          name="email"
          placeholder="Please enter your email"
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
          placeholder="Please enter your password"
          value={data.password}
          onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Form.Group inline error={!!errors.avatar}>
          <label>Choose Your Avatar:</label>
          <Form.Field control={Radio} value="/avatars/avatar.png" checked={value === '/avatars/avatar.png'} onChange={this.handleChange} />
            <Image src="/avatars/avatar.png" size="tiny" />
          <Form.Field control={Radio} value="/avatars/woman.png" checked={value === '/avatars/woman.png'} onChange={this.handleChange} />
            <Image src="/avatars/woman.png" size="tiny" />
          <Form.Field control={Radio} value="/avatars/heisenberg.png" checked={value === '/avatars/heisenberg.png'} onChange={this.handleChange} />
            <Image src="/avatars/heisenberg.png" size="tiny" />
          <Form.Field control={Radio} value="/avatars/woman1.png" checked={value === '/avatars/woman1.png'} onChange={this.handleChange} />
            <Image src="/avatars/woman1.png" size="tiny" />
          <Form.Field control={Radio} value="/avatars/man.png" checked={value === '/avatars/man.png'} onChange={this.handleChange} />
          <Image src="/avatars/man.png" size="tiny" />
          <Form.Field control={Radio} value="/avatars/woman2.png" checked={value === '/avatars/woman2.png'} onChange={this.handleChange} />
            <Image src="/avatars/woman2.png" size="tiny" />
          <Form.Field control={Radio} value="/avatars/wood-cutter.png" checked={value === '/avatars/wood-cutter.png'} onChange={this.handleChange} />
            <Image src="/avatars/wood-cutter.png" size="tiny" />
          {errors.avatar && <InlineError text={errors.avatar} />}
        </Form.Group>
        <Form.Field inline>
          <label>Make Profile Public:</label>
          <Checkbox toggle onChange={this.handleToggle} />
        </Form.Field>
        <Button primary>Sign Up</Button>
        {error && error.response && <InlineError text={error.response.data} />}
      </Form>
      </Segment>
    )
  }
}


/* --------------- CONTAINER ----------------------- */

const mapSignup = (state) => {
    return {
      error: state.user.error
    }
  }

const mapDispatch = { auth }


export default connect(mapSignup, mapDispatch)(SignupForm)
