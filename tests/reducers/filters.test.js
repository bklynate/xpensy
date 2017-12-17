import moment from 'moment';
import filtersReducer from './../../src/reducers/filters';

describe('filter reducers', () => {
  it('should set a default filter', () => {
    const filterReducerDefaultState = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    };
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(filterReducerDefaultState);
  });

  it('should set a text filter', () => {
    const text = 'rent';
    const action = {
      type: 'TEXT_FILTER',
      text,
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
  });

  it('should set a startDate filter', () => {
    const startDate = moment(0);
    const action = {
      type: 'SET_START_DATE',
      startDate,
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
  });

  it('should set a endDate filter', () => {
    const endDate = moment(0);
    const action = {
      type: 'SET_END_DATE',
      endDate,
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
  });

  it('should set a filter to sort by date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toEqual('date');
  });

  it('should set a filter to sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toEqual('amount');
  });
});
