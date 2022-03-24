import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Tabs, Row, Col } from 'antd';

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
} from '@components';
import { ITourDetail } from '@interfaces';

interface ITourDetailBody {
  data: ITourDetail;
  onClick: (id: number) => void;
}

export const TourDetailBody = (props: ITourDetailBody) => {
  const { data, onClick } = props;
  const { TabPane } = Tabs;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const pathUrl = ['Home'].concat(
    window.location.pathname.split('/'),
  );
  return (
    <StyledTourDetailBodyContainer>
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
                spaceBetween={29}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
              >
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
              <TourDetailReview />
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
            justify={'space-around'}
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
