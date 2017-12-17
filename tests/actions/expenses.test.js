import { addExpense, removeExpense, editExpense } from './../../src/actions/expenses';

describe('Expense Actions', () => {
  it('should provide an object with a type of \'REMOVE_EXPENSE\' and an Id', () => {
    const action = removeExpense({ id: 'a55h0l3' });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      expense: {
        id: 'a55h0l3',
      },
    });
  });

  it('should provide an object with a type of \'EDIT_EXPENSE\', an id, and updates', () => {
    const action = editExpense({ id: 'a55h0l3', updates: { amount: 5024350 } });
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: 'a55h0l3',
      updates: {
        amount: 5024350,
      },
    });
  });

  it('should provide an object with a type of \'ADD_EXPENSE\', an id, and proper fields', () => {
    const action = addExpense({
      description: 'test',
      note: 'testing note',
      amount: 4500,
      createdAt: 1234,
    });
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: 'test',
        note: 'testing note',
        amount: 4500,
        createdAt: 1234,
      },
    });
  });

  it('should provide an object with a type of \'ADD_EXPENSE\', an id, and default fields', () => {
    const action = addExpense({});
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
      },
    });
  });
});
