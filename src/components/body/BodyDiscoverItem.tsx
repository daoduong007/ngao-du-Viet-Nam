import React from 'react';

import { StyledBodyDiscoverItem } from '@components';

interface IItemProps {
  imgUrl: string;
  location: string;
  experiences?: string;
}
export const BodyDiscoverItem = (props: IItemProps) => {
  const { imgUrl, location, experiences } = props;
  return (
    <StyledBodyDiscoverItem>
      <div className='item-image'>
        <img src={imgUrl} />
      </div>
      <div className='item-location'>
        <p>{location}</p>
      </div>

      <div className='item-infomation'>
        <p>{experiences}</p>
      </div>
    </StyledBodyDiscoverItem>
  );
};
