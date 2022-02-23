import React from 'react';
import { generatePath, useHistory } from 'react-router-dom';

import {
  StyledTourDetailBodyContainer,
  IconDot,
  RelatedTours,
  BodyTourItem,
} from '@components';
import { AppRoutes } from '@enums';

export const TourDetailBody = () => {
  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(
      generatePath(AppRoutes.TOUR_DETAIL, {
        id,
      }),
    );
  };
  return (
    <StyledTourDetailBodyContainer>
      <hr className='tour-detail-divider' />
      <div className='tour-detail-body-screenname'>
        <p>Home</p>
        <div>
          <IconDot width={4} height={4} color={'#C4C4C4'} />
        </div>
        <p>Tours</p>
        <div>
          <IconDot width={4} height={4} color={'#C4C4C4'} />
        </div>
        <p>Detail tour</p>
      </div>
      <div className='tour-detail-related-tour'>
        <div className='related-tour-title'>
          <p>Related tours</p>
        </div>
        <div className='related-tour-content'>
          {RelatedTours.map((tour) => (
            <BodyTourItem
              key={tour.id}
              imgUrl={tour.imgUrl}
              location={tour.location}
              title={tour.title}
              timeDepature={tour.timeDepature}
              price={tour.price}
              onClick={handleClick}
              id={tour.id}
            />
          ))}
        </div>
      </div>
    </StyledTourDetailBodyContainer>
  );
};
