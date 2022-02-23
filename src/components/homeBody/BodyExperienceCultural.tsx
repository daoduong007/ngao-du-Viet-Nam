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
  BodyTourItemData2,
  BodyButton,
} from '@components';
import { generatePath, useHistory } from 'react-router-dom';
import { AppRoutes } from '@enums';

export const BodyExperienceCultural = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(
      generatePath(AppRoutes.TOUR_DETAIL, {
        id,
      }),
    );
  };
  return (
    <StyledBodyTourContainer>
      <div className='attractive-tour-title'>
        <p>
          Experience the traditional <br /> cultural beauties of
          Vietnam
        </p>
        <BodyButton name={'View All'} />
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
            {BodyTourItemData2.map((item) => (
              <SwiperSlide key={item.id}>
                <BodyTourItem
                  imgUrl={item.imgUrl}
                  location={item.location}
                  title={item.title}
                  timeDepature={item.timeDepature}
                  price={item.price}
                  id={item.id}
                  onClick={handleClick}
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
