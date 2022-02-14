import React from 'react';
import { StyledFeature, StyledText } from '@components';

export const Feature = () => {
  return (
    <StyledFeature>
      <StyledText
        fontSize={'24px'}
        fontWeight={'bold'}
        color={'#1C1C1E'}
      >
        200+ tours
      </StyledText>
      <StyledText
        fontSize={'24px'}
        fontWeight={'bold'}
        color={'#1C1C1E'}
      >
        100+ destination
      </StyledText>
      <StyledText
        fontSize={'24px'}
        fontWeight={'bold'}
        color={'#1C1C1E'}
      >
        8+ type of tour
      </StyledText>
    </StyledFeature>
  );
};
