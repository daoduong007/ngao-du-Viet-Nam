import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { resetAccessToken, SignUpReset } from '@redux';
const directionalItems = [
  '',
  'About',
  'Tours',
  'Hotels',
  'Contact',
  'Login',
];
export const AppBarDirectional = () => {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken');

  const handleLogOut = () => {
    dispatch(resetAccessToken({}));
    dispatch(SignUpReset({}));
    localStorage.removeItem('accessToken');
  };
  return (
    <div className='app-bar-directional'>
      {directionalItems.map((item, index) => (
        <NavLink exact key={index} to={`/${item.toLowerCase()}`}>
          {item === '' ? (
            <p className='directionalItem'>Home</p>
          ) : item === 'Login' && accessToken !== null ? (
            <p className='directionalItem' onClick={handleLogOut}>
              Log Out
            </p>
          ) : (
            <p className='directionalItem'>{item}</p>
          )}
        </NavLink>
      ))}
    </div>
  );
};
