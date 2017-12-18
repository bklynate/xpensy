import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './../../src/components/AddExpensePage';
import expenses from './../fixtures/expenses';

let addExpense;
let history;
let wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
})
describe('AddExpensePage Component', () => {
  it('should render AddExpensePage properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onSubmit properly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});
