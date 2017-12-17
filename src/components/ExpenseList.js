import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenseSelector from './../selectors/expenses';

export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length ? (
      props.expenses.map(({ id, description, amount, createdAt }) => (
        <ExpenseListItem
          key={id}
          id={id}
          description={description}
          amount={amount}
          createdAt={createdAt}
        />
      ))
    ) : (
      <p>There are currently {props.expenses.length} expenses to track.</p>
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: expenseSelector(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
