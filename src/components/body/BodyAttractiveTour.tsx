import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import {
  StyledBodyTourContainer,
  StyledBodyTourListItem,
  BodyTourItem,
  IconArrow,
  BodyTourItemData1,
} from '@components';

export const BodyAttractiveTour = () => {
  console.log(BodyTourItemData1);
  return (
    <StyledBodyTourContainer>
      <div className='attractive-tour-title'>
        <p>
          Attractive tour and <br /> interesting experiences
        </p>
      </div>
      <div className='attractive-tour-list-item'>
        <StyledBodyTourListItem>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {BodyTourItemData1.map((item, index) => (
              <SwiperSlide key={index}>
                <BodyTourItem
                  imgUrl={item.imgUrl}
                  location={item.location}
                  title={item.title}
                  timeDepature={item.timeDepature}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledBodyTourListItem>
        <div className='list-item-load-more'>
          <IconArrow />
        </div>
      </div>
    </StyledBodyTourContainer>
  );
};
