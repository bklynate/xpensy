import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './../../src/components/EditExpensePage';

let editExpense;
let removeExpense;
let history;
let wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
    />
  );
});

describe('EditExpensePage Component', () => {
  it('should EditExpensePage component properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
