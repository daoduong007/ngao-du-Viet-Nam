import React from 'react';
import { Link } from 'react-router-dom';

import { StyledFooterDirectional } from '@components';

const footerDirectionalItems = [
  'Home',
  'About',
  'Tours',
  'Hotels',
  'Contact',
];
export const FooterDirectional = () => {
  return (
    <StyledFooterDirectional>
      {footerDirectionalItems.map((item, index) => (
        <Link key={index} to={`/${item.toLowerCase()}`}>
          <p className='directionalItem'>{item}</p>
        </Link>
      ))}
    </StyledFooterDirectional>
  );
};
