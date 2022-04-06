import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Rate, Row, Tabs } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { IHotelDetail } from '@interfaces';

import 'swiper/css';

import {
  IconLocation,
  SlideImageUrl,
  StyledHotelDetailBodyContainer,
  ListHotelRecommend,
  HotelItem,
  HotelDetailBodyDescription,
  HotelDetailBodyReview,
  HotelDetailTotalForm,
  HotelDetailBodySelectRoom,
  BreadcrumbLink,
  IconCamera,
} from '@components';

interface IHotelDetailBody {
  data: IHotelDetail;
  onClick: (id: number) => void;
}
export const HotelDetailBody = (props: IHotelDetailBody) => {
  const { TabPane } = Tabs;
  const { data, onClick } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [remainingImage, setRemainingImage] = useState<number>(
    SlideImageUrl.length - 4,
  );
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  const [currentImagePopUp, setCurrentImagePopUp] = useState<string>(
    SlideImageUrl[0],
  );

  const refMouse = useRef<any>();

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (
        // If the pop up is open and the clicked target is not within the popup content,
        popUpVisible &&
        refMouse.current &&
        !refMouse.current.contains(e.target)
      ) {
        setPopUpVisible(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickOutside);
    };
  }, [popUpVisible]);

  const pathUrl = ['Home'].concat(
    window.location.pathname.split('/'),
  );

  const ImgSlideLenght = SlideImageUrl.length;
  const handleRemainingImgSlide = (currentIndex: number) => {
    setRemainingImage(ImgSlideLenght - currentIndex - 4);
  };

  //hide scroll Y when open pop up
  useEffect(() => {
    if (popUpVisible) {
      document.body.classList.add('hide-scroll');
    }

    return () => {
      document.body.classList.remove('hide-scroll');
    };
  }, [popUpVisible]);
  return (
    <StyledHotelDetailBodyContainer>
      {popUpVisible ? (
        <div className='pop-up-image-slide'>
          <div className='pop-up-content' ref={refMouse}>
            <div className='pop-up-button'>
              <Button
                type='primary'
                onClick={() => {
                  setPopUpVisible(false);
                }}
              >
                X
              </Button>
            </div>

            <div className='pop-up-image'>
              <div className='pop-up-image-main'>
                <div className='body-content-location'>
                  <IconLocation />
                  <p>{data.location}</p>
                </div>
                <div className='body-content-rating-review-star'>
                  <div className='body-content-rating'>
                    <p>
                      <span>Rating {data.rating}</span>{' '}
                    </p>
                  </div>

                  <p>{data.review} reviews</p>
                  <Rate
                    disabled
                    value={data.star}
                    className='body-content-star'
                  />
                </div>
                <img src={currentImagePopUp} alt='Detail tour' />
              </div>
              <div className='pop-up-image-list'>
                <Row
                  className='listtour-body-content'
                  gutter={[
                    { xs: 0, sm: 5, md: 5, lg: 5 },
                    { xs: 10, sm: 10, md: 10 },
                  ]}
                >
                  {SlideImageUrl.map((imgUrl, index) => (
                    <Col
                      key={index}
                      className='list-tour-item'
                      xs={{ span: 8 }}
                      sm={{ span: 8 }}
                      md={{ span: 6 }}
                      lg={{ span: 12 }}
                      xl={{ span: 8 }}
                    >
                      <img
                        key={index}
                        src={imgUrl}
                        alt='Detail tour'
                        onClick={() => {
                          setCurrentImagePopUp(imgUrl);
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <BreadcrumbLink pathUrl={pathUrl} screenName='hotels' />
      <div className='hotel-detail-body-content'>
        <div className='body-content-name'>
          <p>{data.name}</p>
        </div>
        <div className='body-content-location'>
          <IconLocation />
          <p>{data.location}</p>
        </div>
        <div className='body-content-rating-review-star'>
          <div className='body-content-rating'>
            <p>
              <span>Rating {data.rating}</span>{' '}
            </p>
          </div>

          <p>{data.review} reviews</p>
          <Rate
            disabled
            value={data.star}
            className='body-content-star'
          />
        </div>
        <div className='image-and-booking-form'>
          <div className='body-content-image'>
            <div className='body-content-image-main'>
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper2'
                breakpoints={{
                  0: {
                    slidesPerView: 1.24,
                    spaceBetween: 8,
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                  },
                  600: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                  },
                }}
              >
                {SlideImageUrl.map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <img src={imgUrl} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='body-content-image-slide'>
              <Swiper
                onSwiper={(swiper) => {
                  setThumbsSwiper(swiper);
                }}
                spaceBetween={29}
                slidesPerView={4}
                freeMode={false}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
                onSlideChange={(slide) => {
                  handleRemainingImgSlide(slide.activeIndex);
                }}
              >
                <div
                  className='count-image'
                  onClick={() => {
                    setPopUpVisible(true);
                  }}
                >
                  <IconCamera />
                  <p> {remainingImage} +</p>
                </div>
                {SlideImageUrl.map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <img src={imgUrl} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className='body-content-total-form'>
            <HotelDetailTotalForm />
          </div>
        </div>

        <div className='body-content-selections'>
          <Tabs defaultActiveKey='2'>
            <TabPane tab='Select room' key='1'>
              <HotelDetailBodySelectRoom />
            </TabPane>
            <TabPane tab='Descriptions' key='2'>
              <h2>
                <HotelDetailBodyDescription />
              </h2>
            </TabPane>
            <TabPane tab='Review(52)' key='3'>
              <HotelDetailBodyReview data={data} />
            </TabPane>
          </Tabs>
        </div>
      </div>

      <div className='hotel-detail-recommend'>
        <div className='hotel-detail-recommend-title'>
          <p>Recommended for you</p>
        </div>
        <div className=''>
          <Row
            className=''
            gutter={[
              { xs: 0, sm: 20, md: 30, lg: 30 },
              { xs: 20, sm: 25, md: 45 },
            ]}
          >
            {ListHotelRecommend.map((tour) => (
              <Col
                key={tour.id}
                className='list-tour-item'
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <HotelItem
                  data={tour}
                  onClick={() => onClick(tour.id)}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </StyledHotelDetailBodyContainer>
  );
};
