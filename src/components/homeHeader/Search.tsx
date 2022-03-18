import React from 'react';
import styled from 'styled-components';

import { Tabsearch } from '@components';

export const Search = () => {
  return (
    <StyledSearch>
      <Tabsearch />
    </StyledSearch>
  );
};
const StyledSearch = styled.div`
  width: 445px;
  height: 568px;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.704) 1.52%,
    rgba(255, 255, 255, 0.64) 100%
  );

  display: flex;
  flex-direction: column;
`;
