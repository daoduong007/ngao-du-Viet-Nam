import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  StyledTourDetailBodyContainer,
  IconDot,
  RelatedTours,
  BodyTourItem,
  IconLocation,
  IconStar,
  SlideImageUrl,
} from '@components';

export const TourDetailBody = (
  tour: any,
  onClick: (id: number) => void,
) => {
  const { imgUrl, location, title } = tour.tour;
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

      <div className='tour-detail-body-content'>
        <div className='body-content-title'>
          <p>{title}</p>
        </div>
        <div className='body-content-location'>
          <IconLocation />
          <p>{location}</p>
        </div>
        <div className='body-content-evaluate'>
          <div className='evaluate-stars'>
            <IconStar />
            <p>4.5</p>
          </div>
          <div className='evaluate-reviews'>
            <p>128 reviews</p>
          </div>
        </div>
        <div className='body-content-image-and-booking-form'>
          <div className='body-content-image'>
            <div className='body-content-image-main'>
              <img src={imgUrl} />
            </div>
            <div className='body-content-image-slide'>
              <Swiper
                modules={[Navigation]}
                spaceBetween={29}
                slidesPerView={4}
              >
                {SlideImageUrl.map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <img src={imgUrl} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className='body-content-booking-form'></div>
        </div>
        <div className='body-content-selections'>
          <div className='body-content-descriptions'>
            <div className='descriptions-ovrerview'></div>
            <div className='descriptions-included'></div>
            <div className='descriptions-depature-end'></div>
            <div className='descriptions-tour-itinerary'></div>
            <div className='descriptions-maps'></div>
            <div className='descriptions-panoramic-image-video'>
              <div className='panoramic-image'></div>
              <div className='panoramic-video'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='tour-detail-related-tour'>
        <div className='related-tour-title'>
          <p>Related tours</p>
        </div>
        <div className='related-tour-content'>
          {RelatedTours.map((tour) => (
            <BodyTourItem
              key={tour.id}
              data={tour}
              onClick={() => onClick(tour.id)}
            />
          ))}
        </div>
      </div>
    </StyledTourDetailBodyContainer>
  );
};
