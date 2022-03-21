import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const StyledFooterDirectional = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 0;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */

    color: #ffffff;

    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 600px) {
    p {
      font-size: 12px;
    }
  }
`;
