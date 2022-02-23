import React from 'react';
import { useParams } from 'react-router-dom';

import {
  TourDetailHeader,
  TourDetailBody,
  Footer,
} from '@components';

export const TourDetailScreen = ({}) => {
  // const { id }: any = useParams();
  // console.log(id);
  return (
    <>
      <TourDetailHeader />
      <TourDetailBody />
      <Footer />
    </>
  );
};
