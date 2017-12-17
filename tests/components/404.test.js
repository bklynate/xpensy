import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './../../src/components/404';

describe('Error Page', () => {
  it('should display an error message if page not found', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
