import React from 'react';

import { StyledSlogan, StyledText } from '@components';

export const Slogan = () => {
  return (
    <StyledSlogan>
      <StyledText
        fontSize={'16px'}
        fontWeight={'bold'}
        lineHeight={'160%'}
        color={'#FFF2CF'}
      >
        Welcome to NgaoduVietnam
      </StyledText>
      <StyledText
        fontSize={'60px'}
        fontWeight={'500'}
        lineHeight={'100%'}
        color={'#FFFFFF'}
      >
        Perfect place for your stories
      </StyledText>
    </StyledSlogan>
  );
};
