import React from 'react';
import styled from 'styled-components';

import { IconLocation, IconMail } from '@components';

export const FooterContact = () => {
  return (
    <StyledFooterContact>
      <div className='footer-contact-location'>
        <div className='icon-footer-contact'>
          <IconLocation color='white' />
        </div>
        <a
          href='https://goo.gl/maps/wCT1LJDsqCg6JQ2RA'
          target='_blank'
          rel='noreferrer'
        >
          <p>
            Lilama 10 Tower, 56 To Huu, Trung Van, Nam Tu Liem, Ha Noi
          </p>
        </a>
      </div>
      <div className='footer-contact-email'>
        <div className='icon-footer-contact'>
          <IconMail />
        </div>
        <a
          href='mailto:hello@adamotravel.com '
          target='_blank'
          rel='noreferrer'
        >
          <p>hello@adamotravel.com</p>
        </a>
      </div>
    </StyledFooterContact>
  );
};

const StyledFooterContact = styled.div`
  width: 255px;
  height: 98px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  p {
    cursor: pointer;
    margin: 0;
    margin-top: -5px;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: #ffffff;
  }

  .footer-contact-location {
    display: flex;
    flex-direction: row;
  }

  .footer-contact-email {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
  }
  .icon-footer-contact {
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    width: 155%;
    margin-left: -60%;

    p {
      font-size: 12px;
    }
  }
`;
