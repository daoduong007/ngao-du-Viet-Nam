import React from 'react';
import { NavLink } from 'react-router-dom';

const directionalItems = [
  '',
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
        <NavLink exact key={index} to={`/${item.toLowerCase()}`}>
          {item === '' ? (
            <p className='directionalItem'>Home</p>
          ) : (
            <p className='directionalItem'>{item}</p>
          )}
        </NavLink>
      ))}
    </div>
  );
};
