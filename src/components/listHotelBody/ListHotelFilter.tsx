import React, { useState } from 'react';
import { Slider, Checkbox, Button, Rate } from 'antd';

import { StyledListTourBodyFilter } from '@components';

interface IListTourFilter {
  onClick: (
    budgetFilter: any,
    hotelStarFilter: number[],
    reviewScoreFilter: number[],
  ) => void;
  isVisiblePopUp: boolean;
}

export const ListHotelFilter = (props: IListTourFilter) => {
  const { onClick, isVisiblePopUp } = props;
  const CheckboxGroup = Checkbox.Group;
  const [budgetFilter, setBudgetFilter] = useState<any>([]);
  const [hotelStarFilter, setHotelStarFilter] = useState<number[]>(
    [],
  );
  const [reviewScoreFilter, setReviewScoreFilter] = useState<
    number[]
  >([]);

  const formatter = (value) => {
    return `$ ${value}`;
  };

  const handleBudgetChange = (budget) => {
    setBudgetFilter(budget);
  };

  const handleHotelStarChange = (star) => {
    setHotelStarFilter(star);
  };

  const handleReviewScoreChange = (score) => {
    setReviewScoreFilter(score);
  };

  const handleClear = () => {
    setBudgetFilter([]);
    setHotelStarFilter([]);
    setReviewScoreFilter([]);
  };

  return (
    <StyledListTourBodyFilter>
      <div className='list-tour-filter-header'>
        <p>FILER BY</p>
        <Button type='primary' onClick={handleClear}>
          Clear
        </Button>
      </div>
      <div className='list-tour-filter-budget'>
        <p className='list-tour-filter-title'>Budget</p>
        <Slider
          range
          max={2000}
          defaultValue={[0, 1000]}
          tipFormatter={formatter}
          tooltipVisible={isVisiblePopUp}
          onAfterChange={(value) => handleBudgetChange(value)}
        />
      </div>
      <hr className='list-tour-divider' />
      <div className='list-tour-filter-duration'>
        <p className='list-tour-filter-title'>Hotel star</p>
        <Checkbox.Group
          onChange={(value) => handleHotelStarChange(value)}
          value={hotelStarFilter}
        >
          {[5, 4, 3, , 2, 1].map((item, index) => (
            <Checkbox key={index} value={item}>
              <Rate disabled={true} defaultValue={item} />
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
      <hr className='list-tour-divider' />
      <div className='list-tour-filter-typetour'>
        <p className='list-tour-filter-title'>Review Score</p>
        <CheckboxGroup
          onChange={(value) => handleReviewScoreChange(value)}
          value={reviewScoreFilter}
        >
          {[
            { label: 'Wonderful: 9.5 +', value: 9.5 },
            { label: 'Very Good: 9+', value: 9 },
            { label: 'Good: 8+', value: 8 },
            { label: 'Pleasant: 7.5+', value: 7.5 },
          ].map((item, index) => (
            <Checkbox key={index} value={item.value}>
              {item.label}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
      <div className='list-tour-filter-submit'>
        <Button
          type='primary'
          onClick={() => {
            onClick(budgetFilter, hotelStarFilter, reviewScoreFilter);
          }}
        >
          Apply Filter
        </Button>
      </div>
    </StyledListTourBodyFilter>
  );
};
