import React from 'react';
import { StyledFooterLicense, StyledText } from '@components';

export const FooterLicense = () => {
  return (
    <StyledFooterLicense>
      <StyledText
        fontFamily={'Apercu Pro'}
        fontWeight={'normal'}
        fontSize={'14px'}
        lineHeight={'24px'}
      >
        Copyright © We.travel. All rights reserved
      </StyledText>
    </StyledFooterLicense>
  );
};
