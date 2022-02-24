import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePath, useHistory } from 'react-router-dom';

import {
  TourDetailHeader,
  TourDetailBody,
  Footer,
  ListTourItems,
} from '@components';
import { AppRoutes } from '@enums';
import { ITourDetail } from '@interfaces';

export const TourDetailScreen = ({}) => {
  const { id }: any = useParams();
  const [tour, setTour] = useState<ITourDetail>();
  const history = useHistory();

  useEffect(() => {
    if (!id) return;
    const tourSelected = ListTourItems.find(
      (tour) => tour.id === Number(id),
    );
    setTour(tourSelected);
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
      <TourDetailHeader />
      {tour ? (
        <TourDetailBody data={tour} onClick={handleClick} />
      ) : (
        <div>...loading</div>
      )}
      <Footer />
    </>
  );
};
