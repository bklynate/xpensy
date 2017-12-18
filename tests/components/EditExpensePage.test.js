import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './../../src/components/EditExpensePage';
import expenses from './../fixtures/expenses';

let editExpense;
let removeExpense;
let history;
let wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
      expense={expenses[1]}
    />
  );
});

describe('EditExpensePage Component', () => {
  it('should EditExpensePage component properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onSubmit properly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });

  it('should handle onRemove properly', () => {
    const { id } = expenses[1];
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({ id });
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});
