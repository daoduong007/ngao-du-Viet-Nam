import React from 'react';
import { Link } from 'react-router-dom';

import { StyledText, StyledDirectional } from '@components';

const directionalItems = [
  'Home',
  'About',
  'Tours',
  'Hotels',
  'Contact',
  'Login',
];
export const Directional = () => {
  return (
    <StyledDirectional>
      {directionalItems.map((item, index) => (
        <Link key={index} to={`/${item.toLowerCase()}`}>
          <StyledText className='directionalItem' color={'#FFFFFF'}>
            {item}
          </StyledText>
        </Link>
      ))}
    </StyledDirectional>
  );
};
