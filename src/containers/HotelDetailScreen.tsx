import React, { useEffect, useState } from 'react';

import {
  HotelDetailBody,
  DetailHeader,
  Footer,
  Loading,
} from '@components';
import { AppRoutes } from '@enums';
import {
  generatePath,
  useHistory,
  useParams,
} from 'react-router-dom';
import { hotelApi } from '@api';

export const HotelDetailScreen = () => {
  const { id }: any = useParams();
  const [hotel, setHotel] = useState<any>();
  const history = useHistory();

  useEffect(() => {
    const fetchTourList = async () => {
      try {
        const response = await hotelApi.get(id);
        setHotel(response);
      } catch (error) {
        console.error('fail to fetch tour list', error);
      }
    };

    fetchTourList();
  }, [id]);

  const handleClick = (id: number) => {
    history.push(
      generatePath(AppRoutes.HOTEL_DETAIL, {
        id,
      }),
    );
  };

  return (
    <>
      {hotel ? (
        <>
          <DetailHeader />
          <HotelDetailBody data={hotel} onClick={handleClick} />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
