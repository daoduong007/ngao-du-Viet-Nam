import React, { useState } from 'react';

import {
  StyledHeaderContainer,
  Appbar,
  Feature,
  Slogan,
  Tabsearch,
  DrawerHeader,
  TabSearchTours,
} from '@components';

interface IScreenName {
  screenName: string;
}

export const HeaderHome = (props: IScreenName) => {
  const { screenName } = props;
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <StyledHeaderContainer>
      <div className='header-appbar'>
        <Appbar onClick={showDrawer} />
      </div>

      <div className='header-content'>
        <div className='header-slogan-and-feature'>
          <div className='header-slogan'>
            <Slogan
              title='Search hundreds of tours and more'
              content='Attractive tour and interesting experiences'
            />
          </div>
          <div className='header-feature'>
            <Feature />
          </div>
        </div>
        <div className='header-search'>
          {screenName === 'home' ? (
            <Tabsearch />
          ) : screenName === 'list_tour' ? (
            <TabSearchTours tabName='tab_tour' />
          ) : null}
        </div>
      </div>
      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
    </StyledHeaderContainer>
  );
};
