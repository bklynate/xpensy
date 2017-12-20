import React from 'react';
import { connect } from 'react-redux';
import expenseSelector from './../../src/selectors/expenses';
import expenseTotal from './../../src/selectors/expenseTotal';

export const ExpenseSummary = props => (
  <div>
    <h2>
      {props.expenses.length
          ? `Your current expenses equal: ${props.total(props.expenses)}`
          : `You have ${props.total()} in expenses`}
    </h2>
  </div>
);

const mapStateToProps = state => ({
  expenses: expenseSelector(state.expenses, state.filters),
  total: () => expenseTotal(expenseSelector(state.expenses, state.filters))
});
export default connect(mapStateToProps)(ExpenseSummary);
