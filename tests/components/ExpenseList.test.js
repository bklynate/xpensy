import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from './../../src/components/ExpenseList';
import expenses from './../fixtures/expenses';

describe('ExpenseList Component', () => {
  it('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render empty message when there are no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
