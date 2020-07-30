import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
    <>
      <NavLink exact activeClassName="active_class" to="/about">About (NavLink) </NavLink> {' '}{' '}
      <NavLink exact activeClassName="active_class" to="/contact">Contact (NavLink) </NavLink>
      <br/>
      <br/>
      <Link to="/about">About (Link)</Link>{' '}{' '}
      <Link to="/contact">Contact (Link)</Link>
    </>
  );
};

export default Menu;
