import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import {
  StyledBodyTourContainer,
  StyledBodyTourListItem,
  BodyTourItem,
  IconArrow,
  BodyTourItemData2,
} from '@components';

export const BodyExperienceCultural = () => {
  return (
    <StyledBodyTourContainer>
      <div className='attractive-tour-title'>
        <p>
          Experience the traditional <br /> cultural beauties of
          Vietnam
        </p>
      </div>
      <div className='attractive-tour-list-item'>
        <StyledBodyTourListItem>
          <Swiper spaceBetween={0} slidesPerView={3}>
            {BodyTourItemData2.map((item, index) => (
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
