import React from 'react';
import { IconLogo } from '@components';

interface IAppbar {
  color?: string;
}

export const AppBarLogo = (props: IAppbar) => {
  return (
    <div className='app-bar-logo'>
      <IconLogo color={props.color} />
    </div>
  );
};
