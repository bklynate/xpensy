import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from './../../src/components/Header';

describe('React Header component', () => {
  it('should properly render the react Header component', () => {
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').length).toBe(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
