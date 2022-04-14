import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePath, useHistory } from 'react-router-dom';

import {
  DetailHeader,
  TourDetailBody,
  Footer,
  Loading,
} from '@components';
import { AppRoutes } from '@enums';
import { tourApi } from '@api';

export const TourDetailScreen = ({}) => {
  const { id }: any = useParams();
  const [tour, setTour] = useState<any>();
  const history = useHistory();

  useEffect(() => {
    const fetchTourList = async () => {
      try {
        const response = await tourApi.get(id);
        setTour(response);
      } catch (error) {
        console.error('fail to fetch tour list', error);
      }
    };

    fetchTourList();
  }, [id]);

  const handleClick = (id: number) => {
    history.push(
      generatePath(AppRoutes.TOUR_DETAIL, {
        id,
      }),
    );
  };

  return (
    <>
      {tour ? (
        <>
          <DetailHeader />
          <TourDetailBody data={tour} onClick={handleClick} />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
