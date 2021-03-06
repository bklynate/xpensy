import moment from 'moment';
import expenseSelector from './../../src/selectors/expenses';
import expenses from './../fixtures/expenses';

describe('expenseSelector', () => {
  it('should be able to select by text filteration', () => {
    const filters = {
      text: 'phone',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined,
    };
    const result = expenseSelector(expenses, filters);
    expect(result).toEqual([expenses[2]]);
  });

  it('should be able to select by startDate filteration', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined,
    };
    const result = expenseSelector(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
  });

  it('should be able to select by endDate filteration', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0),
    };
    const result = expenseSelector(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[0]]);
  });

  it('should be able to select by amount filteration', () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined,
    };
    const result = expenseSelector(expenses, filters);
    expect(result).toEqual([...expenses]);
  });

  it('should be able to select by date filteration', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined,
    };
    const result = expenseSelector(expenses, filters);
    expect(result).toEqual([...expenses].reverse());
  });
});
