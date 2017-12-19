import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Xpensy</h1>
    <NavLink exact activeClassName="is-active" to="/">
      DashBoard
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink>
    <NavLink activeClassName="is-active" to="/help">
      Help
    </NavLink>
  </div>
);

export default Header;
