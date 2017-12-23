/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading.....</p>, document.getElementById('app'))
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(App, document.getElementById('app'));
});
