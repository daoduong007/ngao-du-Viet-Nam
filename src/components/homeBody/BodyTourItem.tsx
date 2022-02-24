import React from 'react';

import {
  StyledBodyTourItem,
  IconLocation,
  IconDepatureTime,
} from '@components';
import { ITourDetail } from '@interfaces';
interface ITourProps {
  data: ITourDetail;
  onClick: (id: number) => void;
}
export const BodyTourItem = (props: ITourProps) => {
  const { data, onClick } = props;
  return (
    <StyledBodyTourItem onClick={() => onClick(data.id)}>
      <div className='item-image'>
        <img src={data.imgUrl} />
      </div>
      <div className='item-location'>
        <div className='item-location-icon'>
          <IconLocation />
        </div>
        <p>{data.location}</p>
      </div>
      <div className='item-title'>
        <p>{data.title}</p>
      </div>
      <div className='item-infomation'>
        <div className='item-infomation-time'>
          <div className='item-infomation-icon'>
            <IconDepatureTime />
          </div>
          <div>
            <p>{data.timeDepature}</p>
          </div>
        </div>
        <div className='item-infomation-price'>
          <p>
            from <span>{data.price}</span>
          </p>
        </div>
      </div>
    </StyledBodyTourItem>
  );
};
