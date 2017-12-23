import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { db } from '../../src/firebase/firebase';
import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
  setExpenses
} from './../../src/actions/expenses';
import expenses from './../fixtures/expenses';

// creates a mock redux store with thunk as the middleware.
const createMockStore = configureMockStore([thunk]);

// this sets up dummy data into firebase.
beforeEach(done => {
  const expenseData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  db
    .ref('expenses')
    .set(expenseData)
    .then(() => done());
});

describe('Expense Actions', () => {
  it("should provide an object with a type of 'REMOVE_EXPENSE' and an Id", () => {
    const action = removeExpense({ id: 'a55h0l3' });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      expense: {
        id: 'a55h0l3'
      }
    });
  });

  it("should provide an object with a type of 'EDIT_EXPENSE', an id, and updates", () => {
    const action = editExpense({ id: 'a55h0l3', updates: { amount: 5024350 } });
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: 'a55h0l3',
      updates: {
        amount: 5024350
      }
    });
  });

  it("should provide an object with a type of 'ADD_EXPENSE', an id, and proper fields", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2]
    });
  });

  // use done() to properly test async code
  it('should add an expense to database and store', done => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Gas',
      amount: 3000,
      note: 'road trip',
      createdAt: 2000
    };

    store
      .dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        });
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  it('should add an expense to database and store with default data', done => {
    const store = createMockStore({});
    const expenseData = {
      description: '',
      amount: '',
      note: '',
      createdAt: ''
    };
    store
      .dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        });
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  it('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
  });
});
