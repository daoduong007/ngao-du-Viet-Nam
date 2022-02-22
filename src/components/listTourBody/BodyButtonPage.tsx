import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

interface IBodyButtonPage {
  page?: number;
}

export const BodyButtonPage = (props: IBodyButtonPage) => {
  const { page } = props;
  return (
    <StyledBodyButtonPage>
      <Button type='primary'>{page}</Button>
    </StyledBodyButtonPage>
  );
};

const StyledBodyButtonPage = styled.div`
  background-color: #e8e9ea;
  width: 47px;
  height: 47px;
`;
