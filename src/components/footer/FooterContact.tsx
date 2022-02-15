import React from 'react';
import {
  StyledFooterContact,
  IconLocation,
  IconMail,
  StyledText,
} from '@components';

export const FooterContact = () => {
  return (
    <StyledFooterContact>
      <div className='footer-contact-location'>
        <div className='icon-footer-contact'>
          <IconLocation color='white' />
        </div>
        <StyledText
          color={' #FFFFFF'}
          fontWeight={'normal'}
          fontSize={'14px'}
        >
          Lilama 10 Tower, 56 To Huu, Trung Van, Nam Tu Liem, Ha Noi
        </StyledText>
      </div>
      <div className='footer-contact-email'>
        <div className='icon-footer-contact'>
          <IconMail />
        </div>
        <StyledText
          color={' #FFFFFF'}
          fontWeight={'normal'}
          fontSize={'14px'}
        >
          hello@adamotravel.com
        </StyledText>
      </div>
    </StyledFooterContact>
  );
};
