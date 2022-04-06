import React, { useState } from 'react';
import { Slider, Checkbox, Button } from 'antd';

import { StyledListTourBodyFilter } from '@components';

interface IListTourFilter {
  onClick: (
    budgetFilter: any,
    durationFilter: any,
    typeOfTourFilter: string[],
  ) => void;
  isVisiblePopUp: boolean;
}

export const ListTourFilter = (props: IListTourFilter) => {
  const CheckboxGroup = Checkbox.Group;
  const { onClick, isVisiblePopUp } = props;

  const [budgetFilter, setBudgetFilter] = useState<any>([]);
  const [durationFilter, setDurationFilter] = useState<any>([]);
  const [typeOfTourFilter, setTypeOfTourFilter] = useState<string[]>(
    [],
  );

  const formatter = (value) => {
    return `$ ${value}`;
  };

  const handleBudgetChange = (budget) => {
    setBudgetFilter(budget);
  };

  const handleDurationChange = (duration) => {
    console.log(duration);
    // setDurationFilter(durationFilter);
  };

  const handleTypeOfTourChange = (type) => {
    setTypeOfTourFilter(type);
  };

  const handleClear = () => {
    setBudgetFilter([]);
    setDurationFilter([]);
    setTypeOfTourFilter([]);
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
        <p className='list-tour-filter-title'>Duration</p>
        <CheckboxGroup
          onChange={(value) => {
            handleDurationChange(value);
          }}
          // value={durationFilter}
        >
          {[
            { label: '0 - 3 days', value: [0, 3] },
            { label: '3 - 5 days', value: [3, 5] },
            { label: '5 - 7 days', value: [5, 7] },
            { label: 'Over 1 week', value: [7, null] },
          ].map((item, index) => (
            <Checkbox key={index} value={item.value}>
              {item.label}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
      <hr className='list-tour-divider' />
      <div className='list-tour-filter-typetour'>
        <p className='list-tour-filter-title'>Type of Tours</p>
        <CheckboxGroup
          onChange={(value) => handleTypeOfTourChange(value)}
          value={typeOfTourFilter}
        >
          {[
            'City-Break',
            'Wildlife',
            'Cultural',
            'Ecotourism',
            'Sun and Beaches',
          ].map((item, index) => (
            <Checkbox key={index} value={item}>
              {item}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
      <div className='list-tour-filter-submit'>
        <Button
          type='primary'
          onClick={() =>
            onClick(budgetFilter, durationFilter, typeOfTourFilter)
          }
        >
          Apply Filter
        </Button>
      </div>
    </StyledListTourBodyFilter>
  );
};
