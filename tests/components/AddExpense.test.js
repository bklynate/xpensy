import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './../../src/components/AddExpensePage';
import expenses from './../fixtures/expenses';

let startAddExpense;
let history;
let wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
})
describe('AddExpensePage Component', () => {
  it('should render AddExpensePage properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onSubmit properly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});
