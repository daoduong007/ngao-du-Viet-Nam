import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useHistory } from 'react-router-dom';

import 'swiper/css';

import {
  StyledBodyTourContainer,
  StyledBodyTourListItem,
  BodyDiscoverItem,
  BodyButton,
} from '@components';
import { AppRoutes } from '@enums';

interface IHomeDiscover {
  data: any[];
}

export const BodyDiscoverDestinations = (props: IHomeDiscover) => {
  const { data } = props;
  // const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  // const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // const [isEndOfSlide, setIsEndOfSlide] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    history.push(AppRoutes.LIST_TOUR_SCREEN);
  };

  // const handleSlideChange = (swiper) => {
  //   setCurrentSlideIndex(swiper.activeIndex);
  //   setIsEndOfSlide(swiper.isEnd);
  // };
  return (
    <StyledBodyTourContainer>
      <div className='attractive-tour-title'>
        <p>Discover fascinating destinations</p>
        <div onClick={() => handleClick()}>
          <BodyButton name={'View All'} />
        </div>
      </div>

      <div className='attractive-tour-list-item discover-fascinating'>
        <StyledBodyTourListItem>
          {/* {currentSlideIndex == 0 ? null : (
            <div
              className='list-item-prev prev-discover'
              ref={(node) => {
                setPrevEl(node);
              }}
            >
              <IconArrow />
            </div>
          )} */}
          <Swiper
            modules={[Navigation]}
            // navigation={{
            //   prevEl,
            //   nextEl,
            // }}
            navigation={true}
            // onSlideChange={(swiper) => handleSlideChange(swiper)}
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
                slidesPerView: 4,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <BodyDiscoverItem
                  imgUrl={item.imgUrl}
                  location={item.location}
                  experiences={item.experiences}
                  onClick={handleClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledBodyTourListItem>
        {/* {isEndOfSlide === false ? (
          <div
            className='list-item-load-more load-more-discover'
            ref={(node) => {
              setNextEl(node);
            }}
          >
            <IconArrow />
          </div>
        ) : null} */}
      </div>
    </StyledBodyTourContainer>
  );
};
