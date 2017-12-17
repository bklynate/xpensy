import moment from 'moment';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
} from './../../src/actions/filters';

describe('Filters', () => {
  it('should set the text to filter by the term rent', () => {
    const action = setTextFilter({ text: 'rent' });
    expect(action).toEqual({
      type: 'TEXT_FILTER',
      text: {
        text: 'rent',
      },
    });
  });

  it('should set the text to filter default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
      type: 'TEXT_FILTER',
      text: '',
    });
  });

  it('should set the start date properly', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0),
    });
  });

  it('should set the start date with it\'s default value', () => {
    const action = setStartDate();
    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: undefined,
    });
  });

  it('should set the end date properly', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0),
    });
  });

  it('should set the end date with it\'s default value', () => {
    const action = setEndDate();
    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: undefined,
    });
  });

  it('should set a filter that sorts by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
  });

  it('should set a filter that sorts by date', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE' });
  });
});
