import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

const { Option } = Select;

interface DefaultValue {
  defaultValue: string;
}

export const SearchSelect = (props: DefaultValue) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const { defaultValue } = props;
  return (
    <StyledSearchSelect>
      <Select defaultValue={defaultValue} onChange={handleChange}>
        <Option value='Cultural tourism'>Cultural tourism</Option>
        <Option value='Culinary tourism'>Culinary tourism</Option>
        <Option value='Green tourism'>Green tourism</Option>
        <Option value='MICE tourism'>MICE tourism</Option>
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
    .ant-select-arrow {
      right: 0;
    }
  }
`;
