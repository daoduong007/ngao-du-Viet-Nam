import React, { useEffect, useState } from 'react';

import { HeaderListHotel, ListTourBody, Footer } from '@components';
import { headerApi } from '@api';

export const ListTourScreen = () => {
  const [urlBanner, setUrlBanner] = useState<string>('');
  useEffect(() => {
    const fetBannerListTour = async () => {
      try {
        const params = {
          name: 'bannerListTour',
        };
        const response = await headerApi.getBanner(params);
        setUrlBanner(response[0].imgUrl);
      } catch (error) {
        console.error('fail to load banner', error);
      }
    };
    fetBannerListTour();
  }, []);
  return (
    <>
      <HeaderListHotel screenName='list_tour' urlBanner={urlBanner} />
      <ListTourBody />
      <Footer />
    </>
  );
};
