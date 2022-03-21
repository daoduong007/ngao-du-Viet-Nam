import React, { useState } from 'react';

import {
  StyledHotelsHeaderContainer,
  TabSearchTours,
  Slogan,
  Appbar,
  DrawerHeader,
} from '@components';

interface IScreenName {
  screenName: string;
  urlBanner?: string;
}

export const HeaderListHotel = (props: IScreenName) => {
  const { screenName, urlBanner } = props;

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <StyledHotelsHeaderContainer url={urlBanner}>
      <Appbar onClick={showDrawer} />

      <div className='header-content'>
        <div className='header-slogan-and-feature'>
          {screenName === 'list_hotel' ? (
            <Slogan
              screenName='list_hotel'
              title='Find deals on hotels, homes, and much more...'
              content='From cozy country homes to funky city apartments'
            />
          ) : screenName === 'list_tour' ? (
            <Slogan
              screenName='list_tour'
              title='Search hundreds of tours and more'
              content='Attractive tour and interesting experiences'
            />
          ) : null}

          <div className='header-feature'></div>
        </div>
        <div className='header-search'>
          {screenName === 'list_hotel' ? (
            <TabSearchTours tabName='tab_hotel' />
          ) : screenName === 'list_tour' ? (
            <TabSearchTours tabName='tab_tour' />
          ) : null}
        </div>
      </div>

      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
    </StyledHotelsHeaderContainer>
  );
};
