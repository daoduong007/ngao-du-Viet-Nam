import React from 'react';
import styled from 'styled-components';
import { Button, DatePicker, Input, Select } from 'antd';

import {
  IconLocation,
  IconSearch,
  IconFlag,
  IconDepatureTime,
  IconGuest,
} from '@components';

const typesOfTours = [
  'Cultural tourism',
  'Green tourism',
  'MICE tourism',
];

interface ITabSearchName {
  tabName: string;
}
export const TabSearchTours = (props: ITabSearchName) => {
  const { tabName } = props;
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledSearchTabPane>
      <div className='title'>
        {tabName === 'tab_tour' ? (
          <h1>Discover beautiful Vietnam</h1>
        ) : (
          <h1>Find hotels for your next trip</h1>
        )}
      </div>
      <div className='tab-search-list-item'>
        <div className='tab-search-item'>
          <div className='tab-search-icon'>
            <IconLocation />
          </div>
          <Input placeholder={'Quatlam Beach, Giaothuy, Namdinh'} />
        </div>
        <div className='tab-search-item'>
          <div className='tab-search-icon'>
            <IconDepatureTime />
          </div>

          <DatePicker
            placeholder={'Departure time'}
            suffixIcon={null}
            bordered={false}
          />
        </div>
        {tabName === 'tab_tour' ? (
          <div className='tab-search-item'>
            <div className='tab-search-icon'>
              <IconFlag />
            </div>
            <div className='select-type-tour'>
              <Select
                defaultValue='Type of tour'
                onChange={handleChange}
              >
                {typesOfTours.map((item, index) => (
                  <Option value={item} key={index}>
                    {item}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        ) : null}

        <div className='tab-search-item'>
          <div className='tab-search-icon'>
            <IconGuest />
          </div>
          <div className='select-number-guest'>
            <Select
              defaultValue='Number of guests'
              onChange={handleChange}
            >
              {typesOfTours.map((item, index) => (
                <Option value={item} key={index}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className='tab-search-action'>
        <Button className='submitSearch' icon={<IconSearch />}>
          Search
        </Button>
      </div>
    </StyledSearchTabPane>
  );
};
const StyledSearchTabPane = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  padding: 34px 32px;
  width: 445px;

  .title {
    width: 100%;
    text-align: left;
    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;

      color: #1c1c1e;
    }
  }
  .tab-search-action {
    width: 100%;
    height: 64px;

    &:hover {
      cursor: pointer;
    }
    button {
      background-color: #ff7b42;

      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      span {
        margin-left: 16px;

        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        color: #ffffff;
      }
    }
  }
  .tab-search-list-item {
    width: 100%;
  }
  .tab-search-item {
    width: 100%;
    height: 64px;

    margin-bottom: 18px;
    display: flex;
    align-items: center;

    background-color: #ffffff;
    .tab-search-icon {
      padding: 0 23px 0 26px;
    }
    .ant-input:focus,
    textarea:focus {
      box-shadow: none !important;
    }
    .ant-input {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      /* tieu de */

      color: #1c1c1e;

      border: 0;
    }

    .ant-picker-range .ant-picker-active-bar {
      background-color: #ff7b42;
    }
    .ant-picker {
      width: 78.5%;
    }
  }
  .select-type-tour,
  .select-number-guest {
    width: 100%;
    display: flex;
    align-items: left;
    .ant-select {
      width: 95%;
      padding-right: 26px;
    }
    .ant-select-single
      .ant-select-selector
      .ant-select-selection-item {
      text-align: left;
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector {
      border: 0;
    }
    .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
      box-shadow: none !important;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
