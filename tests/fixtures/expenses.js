/* eslint-disable import/prefer-default-export */
import moment from 'moment';

export default [
  {
    id: '1',
    description: 'November rent payment',
    note: 'This is my last rent payment for November',
    amount: 53500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '2',
    description: 'November gas payment',
    note: 'This is my last gas payment for November',
    amount: 34589,
    createdAt: moment(0).valueOf(),
  },
  {
    id: '3',
    description: 'Oct phone bill payment',
    note: 'This is my phone bill payment for October',
    amount: 9390,
    createdAt: moment(0).add(17, 'days').valueOf(),
  },
];
