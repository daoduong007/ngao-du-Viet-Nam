import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  StyledBodyTourContainer,
  StyledBodyTourListItem,
  BodyTourItem,
  IconArrow,
  BodyTourItemData1,
  BodyButton,
} from '@components';

export const BodyAttractiveTour = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <StyledBodyTourContainer>
      <div className='attractive-tour-title'>
        <p>
          Attractive tour and <br /> interesting experiences
        </p>
        <BodyButton />
      </div>
      <div className='attractive-tour-list-item'>
        <StyledBodyTourListItem>
          <div
            className='list-item-prev'
            ref={(node) => setPrevEl(node)}
          >
            <button>prev</button>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={3}
            navigation={{ prevEl, nextEl }}
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
        <div
          className='list-item-load-more'
          ref={(node) => setNextEl(node)}
        >
          <IconArrow />
        </div>
      </div>
    </StyledBodyTourContainer>
  );
};
