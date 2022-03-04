import React, { useEffect, useState } from 'react';

import {
  HotelDetailBody,
  HotelDetailHeader,
  Footer,
  ListHotel,
  Loading,
} from '@components';
import { AppRoutes } from '@enums';
import { IHotelDetail } from '@interfaces';
import {
  generatePath,
  useHistory,
  useParams,
} from 'react-router-dom';

export const HotelDetailScreen = () => {
  const { id }: any = useParams();
  const [hotel, setHotel] = useState<IHotelDetail>();
  const history = useHistory();

  //check hotel id exists
  useEffect(() => {
    if (!id) return;
    const hotelSelected = ListHotel.find(
      (hotel) => hotel.id === Number(id),
    );
    setHotel(hotelSelected);
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
          <HotelDetailHeader />
          <HotelDetailBody data={hotel} onClick={handleClick} />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
