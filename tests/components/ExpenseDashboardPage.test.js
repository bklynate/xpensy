import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from './../../src/components/ExpenseDashboardPage';

describe('ExpenseDashboardPage Component', () => {
  it('should display both ExpenseListFilters and ExpenseList', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
