import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense
        ? (props.expense.amount / 100).toString()
        : '',
      createdAt: props.expense
        ? moment(props.expense.createdAt)
        : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState(() => ({ amount }));
  };

  onDateChange = createdAt => {
    if (createdAt) this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused });

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      const error = 'Please provide a description and/or an amount';
      this.setState(() => ({ error }));
      setTimeout(() => this.setState(() => ({ error: '' })), 2500);
    } else {
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  // componentWillMount = () => {
  // 	if (this.props.expense) {
  // 		const { description, note, amount, createdAt } = this.props.expense;
  // 		this.setState(() => ({ description, note, amount, createdAt: moment(createdAt) }));
  // 	}
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            autoFocus
            onChange={this.onDescriptionChange}
            placeholder="Enter a description of the expense"
            value={this.state.description}
          />
          <input
            type="text"
            onChange={this.onAmountChange}
            placeholder="Enter a amount of the expense"
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Add an (optional) note for this expense"
            value={this.state.note}
          />
          {this.props.expense ? (
            <button>Edit Expense</button>
          ) : (
            <button>Add Expense</button>
          )}
        </form>
      </div>
    );
  }
}
