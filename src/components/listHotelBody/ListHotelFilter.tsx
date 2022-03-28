import React from 'react';
import { Slider, Checkbox, Button, Rate } from 'antd';

import { StyledListTourBodyFilter } from '@components';

export const ListHotelFilter = () => {
  const formatter = (value) => {
    return `$ ${value}`;
  };
  return (
    <StyledListTourBodyFilter>
      <div className='list-tour-filter-header'>
        <p>FILER BY</p>
        <Button type='primary'>Clear</Button>
      </div>
      <div className='list-tour-filter-budget'>
        <p className='list-tour-filter-title'>Budget</p>
        <Slider
          range
          max={2000}
          defaultValue={[300, 1000]}
          tipFormatter={formatter}
        />
      </div>
      <hr className='list-tour-divider' />
      <div className='list-tour-filter-duration'>
        <p className='list-tour-filter-title'>Duration</p>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Checkbox key={index}>
            <Rate disabled={true} defaultValue={item} />
          </Checkbox>
        ))}
      </div>
      <hr className='list-tour-divider' />
      <div className='list-tour-filter-typetour'>
        <p className='list-tour-filter-title'>Type of Tours</p>
        {[5, 4, 3, 2, 1].map((item, index) => (
          <Checkbox key={index}>{item}</Checkbox>
        ))}
      </div>
      <div className='list-tour-filter-submit'>
        <Button type='primary'>Apply Filter</Button>
      </div>
    </StyledListTourBodyFilter>
  );
};
