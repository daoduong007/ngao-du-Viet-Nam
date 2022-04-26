import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { HeaderHome, Footer, BodyHome } from '@components';
import { AppRoutes } from '@enums';

export const HomeScreen = () => {
  const history = useHistory();
  const currentAccessToken = useSelector(
    (state: any) => state.login.accessToken,
  );

  useLayoutEffect(() => {
    if (currentAccessToken === '') {
      history.push(AppRoutes.LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HeaderHome />
      <BodyHome />
      <Footer />
    </>
  );
};
