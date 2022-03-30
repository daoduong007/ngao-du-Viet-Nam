import React, { useState } from 'react';
import { Col, Rate, Row, Tabs } from 'antd';
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
} from '@components';

interface IHotelDetailBody {
  data: IHotelDetail;
  onClick: (id: number) => void;
}
export const HotelDetailBody = (props: IHotelDetailBody) => {
  const { TabPane } = Tabs;
  const { data, onClick } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const pathUrl = ['Home'].concat(
    window.location.pathname.split('/'),
  );
  return (
    <StyledHotelDetailBodyContainer>
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
