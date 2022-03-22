import React from 'react';
import { NavLink } from 'react-router-dom';

const directionalItems = [
  'Home',
  'About',
  'Tours',
  'Hotels',
  'Contact',
  'Login',
];
export const AppBarDirectional = () => {
  return (
    <div className='app-bar-directional'>
      {directionalItems.map((item, index) => (
        <NavLink key={index} to={`/${item.toLowerCase()}`}>
          <p className='directionalItem'>{item}</p>
        </NavLink>
      ))}
    </div>
  );
};
