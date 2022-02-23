import React from 'react';
import { useParams } from 'react-router-dom';

import {
  TourDetailHeader,
  TourDetailBody,
  Footer,
} from '@components';

export const TourDetailScreen = ({}) => {
  return (
    <>
      <TourDetailHeader />
      <TourDetailBody />
      <Footer />
    </>
  );
};
