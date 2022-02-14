import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

interface Placeholder {
  placeholder: string;
}
export const SearchInput = (props: Placeholder) => {
  const { placeholder } = props;
  return (
    <StyledSearchInput>
      <Input placeholder={placeholder} />
    </StyledSearchInput>
  );
};

const StyledSearchInput = styled.div`
  .ant-input {
    width: 100%;
    border: 0;
    border-radius: 0;
    font-size: 14px;
    font-family: DM Sans;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    padding: 0;
    /* or 22px */

    /* subcolor 1 */

    color: #636567;
    input {
      box-shadow: none;
    }
  }
`;
