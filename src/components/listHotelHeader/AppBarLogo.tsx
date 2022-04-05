import React from 'react';
import { useHistory } from 'react-router-dom';

import { IconLogo } from '@components';
import { AppRoutes } from '@enums';
interface IAppbar {
  color?: string;
  width?: number;
  height?: number;
}

export const AppBarLogo = (props: IAppbar) => {
  const { color, width, height } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(AppRoutes.HOME_SCREEN);
  };
  return (
    <div className='app-bar-logo' onClick={handleClick}>
      <IconLogo color={color} width={width} height={height} />
    </div>
  );
};
