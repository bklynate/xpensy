import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from './../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
  onSubmit = expense => {
    this.props.editExpense(expense.id, expense);
    this.props.history('/');
  };

  onClick = expense => {
    this.props.removeExpense({ id: expense.id });
    this.props.history('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editExpense: expense => dispatch(editExpense(expense.id, expense)),
  removeExpense: expense => dispatch(removeExpense({ id: expense.id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
