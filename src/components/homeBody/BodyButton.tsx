import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

interface IButtonName {
  name: string;
}

export const BodyButton = (props: IButtonName) => {
  const { name } = props;
  return (
    <StyledBodyButton className='body-button'>
      <Button type='primary'>{name}</Button>
    </StyledBodyButton>
  );
};

const StyledBodyButton = styled.div`
  span {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */

    color: #ffffff;
  }
  .ant-btn-primary {
    border-color: #1c1c1e;
    background: #1c1c1e;
  }
`;
