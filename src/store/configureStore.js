import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

// this keeps redux devtools available to us
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creates the redux store
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    }),
    enhancers(applyMiddleware(thunk))
  );
  return store;
};
