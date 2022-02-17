import React from 'react';

import { StyledFeature, StyledText, IconDot } from '@components';

export const Feature = () => {
  return (
    <StyledFeature>
      <div className='FeatureHeader'>
        <IconDot />
        <StyledText
          fontFamily={'Space Grotesk'}
          fontWeight={'500'}
          fontSize={'14px'}
          lineHeight={'100%'}
          color={'#1C1C1E'}
        >
          Feature
        </StyledText>
      </div>
      <div className='FeatureBody'>
        <div className='FeatureBodyItem'>
          <StyledText
            color={'#1C1C1E'}
            fontWeight={'bold'}
            fontSize={'24px'}
            lineHeight={'160%'}
          >
            200+
          </StyledText>
          <StyledText
            color={'#1C1C1E'}
            fontWeight={'normal'}
            fontSize={'14px'}
            className='FeatureBodyItemText'
          >
            tours
          </StyledText>
        </div>
        <div className='FeatureBodyItem'>
          <StyledText
            color={'#1C1C1E'}
            fontWeight={'bold'}
            fontSize={'24px'}
            lineHeight={'160%'}
          >
            100+
          </StyledText>
          <StyledText
            color={'#1C1C1E'}
            fontWeight={'normal'}
            fontSize={'14px'}
            className='FeatureBodyItemText'
          >
            destination
          </StyledText>
        </div>
        <div className='FeatureBodyItem'>
          <StyledText
            color={'#1C1C1E'}
            fontWeight={'bold'}
            fontSize={'24px'}
            lineHeight={'160%'}
          >
            8+
          </StyledText>
          <StyledText
            color={'#1C1C1E'}
            fontWeight={'normal'}
            fontSize={'14px'}
            className='FeatureBodyItemText'
          >
            type of tour
          </StyledText>
        </div>
      </div>
    </StyledFeature>
  );
};
