import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { resetAccessToken } from '@redux';
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
  // const login = useSelector((state: any) => state.login);
  const accessToken = localStorage.getItem('accessToken');
  console.log(accessToken);

  const handleLogOut = () => {
    dispatch(resetAccessToken({}));
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
