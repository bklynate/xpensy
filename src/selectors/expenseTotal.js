/* eslint-disable no-param-reassign, arrow-body-style */
import numeral from 'numeral';

export default (expenses = []) => {
  const totalAmount = expenses.reduce((total, expense) => {
    total += expense.amount;
    return total;
  }, 0);
  return numeral(totalAmount / 100).format('$0,0.00');
};
