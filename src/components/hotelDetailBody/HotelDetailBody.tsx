import React from 'react';
import { Rate, Tabs } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { IHotelDetail } from '@interfaces';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  IconDot,
  IconLocation,
  SlideImageUrl,
  StyledHotelDetailBodyContainer,
  ListHotelRecommend,
  HotelItem,
  HotelDetailBodyDescription,
} from '@components';

interface IHotelDetailBody {
  data: IHotelDetail;
  onClick: (id: number) => void;
}
export const HotelDetailBody = (props: IHotelDetailBody) => {
  const { TabPane } = Tabs;
  const { data, onClick } = props;
  return (
    <StyledHotelDetailBodyContainer>
      <div className='hotel-detail-body-content-and-total-form'>
        <div className='hotel-detail-body-content'>
          <div className='hotel-detail-body-screenname'>
            <p>Home</p>
            <div>
              <IconDot width={4} height={4} color={'#C4C4C4'} />
            </div>
            <p>Hotels</p>
            <div>
              <IconDot width={4} height={4} color={'#C4C4C4'} />
            </div>
            <p>Hotel Details</p>
          </div>
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
              defaultValue={data.star}
              className='body-content-star'
            />
          </div>
          <div className='body-content-image'>
            <img src={data.imgUrl} />
          </div>
          <div className='body-content-image-slide'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
            >
              {SlideImageUrl.map((imgUrl, index) => (
                <SwiperSlide key={index}>
                  <img src={imgUrl} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='hotel-detail-body-tabs-content'>
            <Tabs defaultActiveKey='2'>
              <TabPane tab='Select room' key='1'>
                <h2>tab1</h2>
              </TabPane>
              <TabPane tab='Description' key='2'>
                <h2>
                  <HotelDetailBodyDescription />
                </h2>
              </TabPane>
              <TabPane tab='Review' key='3'>
                <h2>tab3</h2>
              </TabPane>
            </Tabs>
          </div>
        </div>
        <div className='hotel-detail-body-total-form'>
          <h1>Total form</h1>
        </div>
      </div>

      <div className='hotel-detail-recommend'>
        <div className='hotel-detail-recommend-title'>
          <p>Recommended for you</p>
        </div>
        <div className='hotel-detail-recommend-content'>
          {ListHotelRecommend.map((item, index) => (
            <div key={index}>
              <HotelItem
                data={item}
                onClick={() => onClick(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledHotelDetailBodyContainer>
  );
};
