import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from './../../src/components/ExpenseListItem';
import expenses from './../fixtures/expenses';

describe('ExpenseListItem Component', () => {
  it('should render an expense list item', () => {
    const { id, description, amount, createdAt } = expenses[0];

    const wrapper = shallow(
      <ExpenseListItem {...expenses[0]} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
