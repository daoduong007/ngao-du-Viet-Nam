import React from 'react';
import { Button } from 'antd';

import {
  ListTourItems,
  BodyTourItem,
  StyledListTourBodyContainer,
  IconDot,
  BodyButton,
  IconPrevPage,
  IconNextPage,
} from '@components';

export const ListTourBody = () => {
  return (
    <StyledListTourBodyContainer>
      <div className='listtour-body-screenname'>
        <p>Home</p>
        <div>
          <IconDot width={4} height={4} color={'#C4C4C4'} />
        </div>
        <p>Tours</p>
      </div>
      <div className='listtour-body-tittle'>
        <p>Attractive tour and interesting experiences</p>
        <div className='listtour-body-filer'>
          <BodyButton name={'Filter'} />
        </div>
      </div>
      <div className='listtour-body-content'>
        {ListTourItems.map((item, index) => (
          <BodyTourItem
            key={index}
            imgUrl={item.imgUrl}
            location={item.location}
            title={item.title}
            timeDepature={item.timeDepature}
            price={item.price}
          />
        ))}
      </div>
      <div className='listtour-body-pagination'>
        <p>Showing 1 / 2</p>
        <div className='listtour-body-pagination-button'>
          <Button type='primary'>
            <IconPrevPage />
          </Button>
          <Button type='primary' className='number-page'>
            1
          </Button>
          <Button type='primary' className='number-page'>
            2
          </Button>
          <Button type='primary' color={'#000000'}>
            <IconNextPage />
          </Button>
        </div>
      </div>
    </StyledListTourBodyContainer>
  );
};
