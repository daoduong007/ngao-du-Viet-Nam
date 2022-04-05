import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Tabs, Row, Col, Button } from 'antd';
import { AppRoutes } from '@enums';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import {
  StyledTourDetailBodyContainer,
  RelatedTours,
  BodyTourItem,
  IconLocation,
  IconStar,
  SlideImageUrl,
  TourDetailBookingForm,
  TourDetailAddionalInfo,
  TourDetailDescription,
  TourDetailReview,
  BreadcrumbLink,
  IconCamera,
} from '@components';
import { submitBookingTourAction } from '@redux';
import { ITourDetail } from '@interfaces';

interface ITourDetailBody {
  data: ITourDetail;
  onClick: (id: number) => void;
}

export const TourDetailBody = (props: ITourDetailBody) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, onClick } = props;
  const { TabPane } = Tabs;
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

  const handleBookingClick = () => {
    history.push(AppRoutes.CHECK_OUT);

    dispatch(
      submitBookingTourAction({
        idTour: data.id,
      }),
    );
  };

  return (
    <StyledTourDetailBodyContainer>
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
                <div className='pop-up-info'>
                  <div className='location'>
                    <IconLocation />
                    <p>{data.location}</p>
                  </div>
                  <div className='evaluate'>
                    <div className='evaluate-stars'>
                      <IconStar />
                      <p>{data.star}</p>
                    </div>
                    <div className='evaluate-reviews'>
                      <p>{data.review} reviews</p>
                    </div>
                  </div>
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

      <BreadcrumbLink pathUrl={pathUrl} screenName='tours' />

      <div className='tour-detail-body-content'>
        <div className='body-content-title'>
          <p>{data.title}</p>
        </div>
        <div className='location-and-evaluate'>
          <div className='body-content-location'>
            <IconLocation />
            <p>{data.location}</p>
          </div>
          <div className='body-content-evaluate'>
            <div className='evaluate-stars'>
              <IconStar />
              <p>{data.star}</p>
            </div>
            <div className='evaluate-reviews'>
              <p>{data.review} reviews</p>
            </div>
          </div>
        </div>

        <div className='body-content-image-and-booking-form'>
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
                onSlideChange={(slide) => {
                  handleRemainingImgSlide(slide.activeIndex);
                }}
                spaceBetween={29}
                slidesPerView={4}
                freeMode={false}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
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

          <div className='body-content-booking-form'>
            <TourDetailBookingForm
              price={data.price}
              duration={data.timeDepature}
              onClick={handleBookingClick}
            />
          </div>
        </div>
        <div className='body-content-selections'>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Description' key='1'>
              <TourDetailDescription />
            </TabPane>
            <TabPane tab='Additional Info' key='2'>
              <TourDetailAddionalInfo />
            </TabPane>
            <TabPane tab='Reviews' key='3'>
              <TourDetailReview
                star={data.star}
                review={data.review}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className='tour-detail-related-tour'>
        <div className='related-tour-title'>
          <p>Related tours</p>
        </div>
        <div className='related-tour-content'>
          <Row
            className='listtour-body-content'
            gutter={[
              { xs: 0, sm: 20, md: 30, lg: 30 },
              { xs: 20, sm: 25, md: 45 },
            ]}
          >
            {RelatedTours.map((tour) => (
              <Col
                key={tour.id}
                className='list-tour-item'
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <BodyTourItem
                  data={tour}
                  onClick={() => onClick(tour.id)}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </StyledTourDetailBodyContainer>
  );
};
