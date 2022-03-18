import React from 'react';
import {
  StyledFooterContact,
  IconLocation,
  IconMail,
} from '@components';

export const FooterContact = () => {
  return (
    <StyledFooterContact>
      <div className='footer-contact-location'>
        <div className='icon-footer-contact'>
          <IconLocation color='white' />
        </div>
        <pattern>
          Lilama 10 Tower, 56 To Huu, Trung Van, Nam Tu Liem, Ha Noi
        </pattern>
      </div>
      <div className='footer-contact-email'>
        <div className='icon-footer-contact'>
          <IconMail />
        </div>
        <p>hello@adamotravel.com</p>
      </div>
    </StyledFooterContact>
  );
};
