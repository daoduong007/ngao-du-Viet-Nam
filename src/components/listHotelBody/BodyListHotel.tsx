import React from 'react';
import { Button, Popover, Select, Pagination } from 'antd';

import {
  StyleBodyListHotelContainer,
  IconDot,
  ListTourFilter,
  ListHotel,
  HotelItem,
} from '@components';

export const BodyListHotel = () => {
  const { Option } = Select;
  return (
    <StyleBodyListHotelContainer>
      <div className='list-hotel-body-screenname'>
        <p>Home</p>
        <div>
          <IconDot width={4} height={4} color={'#C4C4C4'} />
        </div>
        <p>Hotels</p>
      </div>
      <div className='list-hotel-body-tittle'>
        <p>Hotels</p>
        <div className='list-hotel-sort-and-filter'>
          <div className='list-hotel-body-sort'>
            <p className='text-color'>SORT BY:</p>
            <Select
              defaultValue='Price'
              placeholder='Price'
              className='sort-select'
            >
              <Option value='Price'>Price</Option>
              <Option value='Rating'>Rating</Option>
              <Option value='Review'>Review</Option>
            </Select>
          </div>
          <div className='list-hotel-body-filer'>
            <Popover
              placement='bottomLeft'
              content={ListTourFilter}
              trigger='click'
              className='list-hotel-popup'
            >
              <Button type='primary'>Filter</Button>
            </Popover>
          </div>
        </div>
      </div>
      <div className='list-hotel-body-content'>
        {ListHotel.map((item, index) => (
          <div key={index}>
            <HotelItem data={item} />
          </div>
        ))}
      </div>
      <div className='list-hotel-body-pagination'>
        <Pagination defaultCurrent={1} total={20} />
      </div>
    </StyleBodyListHotelContainer>
  );
};
