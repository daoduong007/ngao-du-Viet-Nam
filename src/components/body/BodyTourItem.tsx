import React from 'react';

import {
  StyledBodyTourItem,
  IconLocation,
  IconDepatureTime,
} from '@components';

interface IItemProps {
  imgUrl: string;
  location: string;
  title?: string;
  timeDepature?: string;
  price?: string;
  experiences?: string;
}
export const BodyTourItem = (props: IItemProps) => {
  const { imgUrl, location, title, timeDepature, price } = props;
  return (
    <StyledBodyTourItem>
      <div className='item-image'>
        <img src={imgUrl} />
      </div>
      <div className='item-location'>
        <div className='item-location-icon'>
          <IconLocation />
        </div>
        <p>{location}</p>
      </div>
      <div className='item-title'>
        <p>{title}</p>
      </div>
      <div className='item-infomation'>
        <div className='item-infomation-time'>
          <div className='item-infomation-icon'>
            <IconDepatureTime />
          </div>
          <div>
            <p>{timeDepature}</p>
          </div>
        </div>
        <div className='item-infomation-price'>
          <p>
            from <span>{price}</span>
          </p>
        </div>
      </div>
    </StyledBodyTourItem>
  );
};
