import React from 'react';

import { StyledAppbar } from '@components';
import { Directional } from '@components';
import { Logo } from '@components';

export const Appbar = () => {
  return (
    <StyledAppbar>
      <Logo />
      <Directional />
    </StyledAppbar>
  );
};
