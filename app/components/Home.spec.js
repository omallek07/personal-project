import React from 'react';
import {expect} from 'chai'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from './Home';

configure({adapter: new Adapter()});

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home user={{}} />);
  });

  it('should render user name correctly', () => {
    wrapper.setProps({user: { name: 'Kevin'}});
    expect(wrapper.contains('Welcome Kevin!')).to.equal(true);
  });
});

