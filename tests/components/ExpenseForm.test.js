import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from './../../src/components/ExpenseForm';
import expenses from './../fixtures/expenses';

describe('ExpenseForm Component', () => {
  it('should render ExpenseForm properly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expenseToEdit={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set description on input change', () => {
    const value = 'this is a test description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find('input')
      .at(0)
      .simulate('change', {
        target: { value }
      });
    expect(wrapper.state('description')).toBe(value);
  });

  it('should set note on textarea change', () => {
    const value = 'this is a new value for note!';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
      target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
  });

  it('should set note on textarea change', () => {
    const value = 'this is a new value for note!';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
      target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
  });

  it('should set amount on input change', () => {
    const value = '5668789';
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: { value }
      });
    expect(wrapper.state('amount')).toBe(value);
  });

  it('should NOT set amount on change with invalid input', () => {
    const value = '5668789.123';
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: { value }
      });
    expect(wrapper.state('amount')).not.toBe(value);
  });
});
