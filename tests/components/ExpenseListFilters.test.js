import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from './../../src/components/ExpenseListFilters';
import { filters, altFilters } from './../fixtures/filters';

let wrapper;
let setTextFilter;
let sortByDate;
let sortByAmount;
let setStartDate;
let setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

describe('ExpenseListFilters Component', () => {
  it('should render ExpenseListFilters component properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ExpenseListFilters component with altFilters properly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onTextChange properly', () => {
    const value = 'Hello';
    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });

  it('should handle onSortChange properly by setting date', () => {
    const value = 'date';
    wrapper.setProps({
      filters: altFilters
    });
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
  });

  it('should handle onSortChange properly by setting amount', () => {
    const value = 'amount';
    wrapper.setProps({ filters });
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
  });

  it('should handle onDateChange properly', () => {
    const startDate = moment(0).add('4', 'years');
    const endDate = moment(0).add('8', 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
      startDate,
      endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });

  it('should handle onFocusChange properly', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });
});
