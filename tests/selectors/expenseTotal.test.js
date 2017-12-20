import React from 'react';
import { shallow } from 'enzyme';
import expenseTotal from './../../src/selectors/expenseTotal';
import expenses from './../fixtures/expenses';

describe('ExpenseTotal selector', () => {
  it('should return 0 if there are no expenses', () => {
    const response = expenseTotal();
    expect(response).toBe("$0.00");
  });
});
