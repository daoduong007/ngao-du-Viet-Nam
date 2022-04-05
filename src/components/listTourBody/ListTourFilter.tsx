import React from 'react';
import { Slider, Checkbox, Button } from 'antd';

import {
  StyledListTourBodyFilter,
  DataForTourFilter1,
  DataForTourFilter2,
} from '@components';

interface IListTourFilter {
  onClick: (event: any) => void;
}

export const ListTourFilter = (props: IListTourFilter) => {
  const { onClick } = props;
  const formatter = (value) => {
    return `${value}`;
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
          tooltipVisible={true}
        />
      </div>
      <hr className='list-tour-divider' />
      <div className='list-tour-filter-duration'>
        <p className='list-tour-filter-title'>Duration</p>
        {DataForTourFilter1.map((item, index) => (
          <Checkbox key={index}>{item}</Checkbox>
        ))}
      </div>
      <hr className='list-tour-divider' />
      <div className='list-tour-filter-typetour'>
        <p className='list-tour-filter-title'>Type of Tours</p>
        {DataForTourFilter2.map((item, index) => (
          <Checkbox key={index}>{item}</Checkbox>
        ))}
      </div>
      <div className='list-tour-filter-submit'>
        <Button type='primary' onClick={onClick}>
          Apply Filter
        </Button>
      </div>
    </StyledListTourBodyFilter>
  );
};
