import React from 'react';

import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;
interface DefaultValue {
  defaultValue: string;
}

const typesOfTours = [
  'Cultural tourism',
  'Green tourism',
  'MICE tourism',
];
export const SearchSelect = (props: DefaultValue) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const { defaultValue } = props;
  return (
    <StyledSearchSelect>
      <Select defaultValue={defaultValue} onChange={handleChange}>
        {typesOfTours.map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>
    </StyledSearchSelect>
  );
};

const StyledSearchSelect = styled.div`
  width: 100%;

  .ant-tabs-ink-bar {
    display: none;
  }
  display: flex;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 0;
    padding-left: 0;
    padding-right: 184px;
    width: 300px;
    text-align: left;
  }
  .ant-select {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;

    /* or 22px */

    /* subcolor 1 */

    color: #636567;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow
    .ant-select-selection-placeholder {
    padding-right: 0px;
  }
`;
