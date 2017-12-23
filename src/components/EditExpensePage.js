import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from './../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
  onSubmit = expense => {
    this.props.startEditExpense(expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    const { id } = this.props.expense
    this.props.startRemoveExpense({ id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: expense => dispatch(startEditExpense(expense.id, expense)),
  startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
