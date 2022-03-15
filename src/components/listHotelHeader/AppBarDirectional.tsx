import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link key={index} to={`/${item.toLowerCase()}`}>
          <p className='directionalItem'>{item}</p>
        </Link>
      ))}
    </div>
  );
};
