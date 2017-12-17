/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(
  addExpense({
    description: 'Water Bill',
    amount: 9500,
    createdAt: 556677
  })
);

store.dispatch(
  addExpense({
    description: 'Rent Bill',
    amount: 22000,
    createdAt: -99999
  })
);

store.dispatch(
  addExpense({
    description: 'Food Bill',
    amount: 2000,
    createdAt: 1000
  })
);

store.dispatch(
  addExpense({
    description: 'Gas Bill',
    amount: 11500,
    createdAt: 223344
  })
);

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
