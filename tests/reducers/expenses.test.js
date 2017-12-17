import moment from 'moment';
import expenseReducer from './../../src/reducers/expenses';
import expenses from './../fixtures/expenses';

describe('expense reducers', () => {
  it('should have a default state of an empty array', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  it('should remove an expense from state with its given ID', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      expense: {
        id: expenses[0].id,
      },
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
  });

  it('should NOT remove an expense if it\'s ID is not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      expense: {
        id: 0,
      },
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
  });

  it('should add a new expense to state', () => {
    const action = {
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: 'the description of a test',
        note: 'this is a test note',
        amount: 450000,
        createdAt: moment(3400),
      },
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
  });

  it('should edit an expense with the given ID', () => {
    const updates = {
      description: 'the description of a test',
      note: 'this is a test note',
      amount: 450000,
      createdAt: moment(5500),
    };
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[0].id,
      updates,
    };

    const state = expenseReducer(expenses, action);
    expect(state[0]).toEqual({ ...state[0], ...action.updates });
  });

  it('should NOT allow an edit if given an ID of an expense that doesn\'t exist', () => {
    const updates = {
      description: 'the description of a test',
      note: 'this is a test note',
      amount: 450000,
      createdAt: moment(3420),
    };
    const action = {
      type: 'EDIT_EXPENSE',
      id: -1,
      updates,
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses]);
  });
});
