import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Tabs } from 'antd';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  StyledTourDetailBodyContainer,
  IconDot,
  RelatedTours,
  BodyTourItem,
  IconLocation,
  IconStar,
  SlideImageUrl,
  TourDetailBookingForm,
  TourDetailAddionalInfo,
  TourDetailDescription,
} from '@components';
import { ITourDetail } from '@interfaces';

interface ITourDetailBody {
  data: ITourDetail;
  onClick: (id: number) => void;
}

export const TourDetailBody = (props: ITourDetailBody) => {
  const { data, onClick } = props;
  const { TabPane } = Tabs;
  return (
    <StyledTourDetailBodyContainer>
      <hr className='tour-detail-divider' />
      <div className='tour-detail-body-screenname'>
        <p>Home</p>
        <div>
          <IconDot width={4} height={4} color={'#C4C4C4'} />
        </div>
        <p>Tours</p>
        <div>
          <IconDot width={4} height={4} color={'#C4C4C4'} />
        </div>
        <p>Detail tour</p>
      </div>

      <div className='tour-detail-body-content'>
        <div className='body-content-title'>
          <p>{data.title}</p>
        </div>
        <div className='body-content-location'>
          <IconLocation />
          <p>{data.location}</p>
        </div>
        <div className='body-content-evaluate'>
          <div className='evaluate-stars'>
            <IconStar />
            <p>4.5</p>
          </div>
          <div className='evaluate-reviews'>
            <p>128 reviews</p>
          </div>
        </div>
        <div className='body-content-image-and-booking-form'>
          <div className='body-content-image'>
            <div className='body-content-image-main'>
              <img src={data.imgUrl} />
            </div>
            <div className='body-content-image-slide'>
              <Swiper
                modules={[Navigation]}
                spaceBetween={29}
                slidesPerView={4}
              >
                {SlideImageUrl.map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <img src={imgUrl} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <TourDetailBookingForm
            price={data.price}
            duration={data.timeDepature}
          />
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
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className='tour-detail-related-tour'>
        <div className='related-tour-title'>
          <p>Related tours</p>
        </div>
        <div className='related-tour-content'>
          {RelatedTours.map((tour) => (
            <BodyTourItem
              key={tour.id}
              data={tour}
              onClick={() => onClick(tour.id)}
            />
          ))}
        </div>
      </div>
    </StyledTourDetailBodyContainer>
  );
};
