import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  StyledBodyTourContainer,
  StyledBodyTourListItem,
  BodyDiscoverItem,
  IconArrow,
  BodyTourItemData3,
  BodyButton,
} from '@components';

export const BodyDiscoverDestinations = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <StyledBodyTourContainer>
      <div className='attractive-tour-title'>
        <p>
          Discover fascinating <br /> destinations
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
            slidesPerView={4}
            navigation={{ prevEl, nextEl }}
          >
            {BodyTourItemData3.map((item, index) => (
              <SwiperSlide key={index}>
                <BodyDiscoverItem
                  imgUrl={item.imgUrl}
                  location={item.location}
                  experiences={item.experiences}
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
