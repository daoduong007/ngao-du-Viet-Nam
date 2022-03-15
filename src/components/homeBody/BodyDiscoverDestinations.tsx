import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useHistory } from 'react-router-dom';

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
import { AppRoutes } from '@enums';

export const BodyDiscoverDestinations = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const history = useHistory();

  const handleClick = () => {
    history.push(AppRoutes.LIST_TOUR_SCREEN);
  };
  return (
    <StyledBodyTourContainer>
      <div className='attractive-tour-title'>
        <p>
          Discover fascinating <br /> destinations
        </p>
        <div onClick={() => handleClick()}>
          <BodyButton name={'View All'} />
        </div>
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
