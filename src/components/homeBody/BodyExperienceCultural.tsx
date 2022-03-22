import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { generatePath, useHistory } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  StyledBodyTourContainer,
  StyledBodyTourListItem,
  BodyTourItem,
  IconArrow,
  BodyTourItemData2,
  BodyButton,
} from '@components';

import { AppRoutes } from '@enums';

export const BodyExperienceCultural = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isEndOfSlide, setIsEndOfSlide] = useState(false);

  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(
      generatePath(AppRoutes.TOUR_DETAIL, {
        id,
      }),
    );
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
    setIsEndOfSlide(swiper.isEnd);
  };

  const handleClickViewAll = () => {
    history.push(AppRoutes.LIST_TOUR_SCREEN);
  };

  return (
    <StyledBodyTourContainer>
      <div className='attractive-tour-title'>
        <p>Experience the traditional cultural beauties of Vietnam</p>
        <div
          onClick={() => {
            handleClickViewAll();
          }}
        >
          <BodyButton name={'View All'} />
        </div>
      </div>
      <div className='attractive-tour-list-item'>
        <StyledBodyTourListItem>
          {currentSlideIndex == 0 ? null : (
            <div
              className='list-item-prev'
              ref={(node) => setPrevEl(node)}
            >
              <IconArrow />
            </div>
          )}
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1.24,
                spaceBetween: 8,
                centeredSlides: true,
                centeredSlidesBounds: true,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true,
                centeredSlidesBounds: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
                centeredSlidesBounds: false,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: false,
                centeredSlidesBounds: false,
              },
              1440: {
                spaceBetween: 30,
                slidesPerView: 3,
                centeredSlides: false,
                centeredSlidesBounds: false,
              },
            }}
          >
            {BodyTourItemData2.map((tour) => (
              <SwiperSlide key={tour.id}>
                <BodyTourItem data={tour} onClick={handleClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledBodyTourListItem>
        {isEndOfSlide === false ? (
          <div
            className='list-item-load-more'
            ref={(node) => setNextEl(node)}
          >
            <IconArrow />
          </div>
        ) : null}
      </div>
    </StyledBodyTourContainer>
  );
};
