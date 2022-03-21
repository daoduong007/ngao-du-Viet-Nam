import React from 'react';
import { IconLogo } from '@components';

interface IAppbar {
  color?: string;
  width?: number;
  height?: number;
}

export const AppBarLogo = (props: IAppbar) => {
  const { color, width, height } = props;
  return (
    <div className='app-bar-logo'>
      <IconLogo color={color} width={width} height={height} />
    </div>
  );
};
