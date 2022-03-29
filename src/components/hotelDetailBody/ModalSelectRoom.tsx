import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  DataHotelSelectRoom,
  IconAcreage,
  IconBed,
  IconGuestBold,
  DataDescriptionHotelAmenities,
  SlideImageUrl,
  IconTick,
} from '@components';

interface IData {
  idRoom: any;
  onClick: (event: any) => void;
}

interface IRoomDetail {
  id: number;
  imgUrl: string;
  name: string;
  acreage: string;
  bed: string;
  guest: number;
  price: number;
  outOfRoom: boolean;
}
export const ModalSelectRoom = (props: IData) => {
  const { idRoom, onClick } = props;
  const [hotelSelected, setHotelSelected] = useState<IRoomDetail>();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    const selected = DataHotelSelectRoom.find(
      ({ id }) => id === Number(idRoom),
    );
    setHotelSelected(selected);
  }, [idRoom]);
  return (
    <StyledModalSelectRoom>
      {hotelSelected ? (
        <div className='modal-container'>
          <div className='modal-price-and-image'>
            <p className='modal-title'>{hotelSelected.name}</p>
            <div className='modal-price-button'>
              <p>
                <span className='text-line-through'>$600</span>
                <span className='text-color'>
                  {' '}
                  ${hotelSelected.price}
                </span>
                /night
              </p>
              <div>
                <Button onClick={onClick}>Select Room</Button>
              </div>
            </div>
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
          </div>
          <div className='modal-info'>
            <div className='modal-basic-info'>
              <div className='modal-info-item'>
                <IconAcreage />
                <p>{hotelSelected.acreage}</p>
              </div>
              <div className='modal-info-item'>
                <IconBed />
                <p>{hotelSelected.bed}</p>
              </div>
              <div className='modal-info-item'>
                <IconGuestBold />
                <p>{hotelSelected.guest} Guest</p>
              </div>
            </div>
            <hr />
            <div className='modal-info-inntroduce'>
              <p>
                This air-conditioned room features large windows and a
                balcony with views of the city and sea. It contains a
                sitting area, flat-screen TV, a fridge and
                tea-and-coffee-making facilities. The bathroom has a
                shower and toilet.
              </p>
              <p>
                Maximum occupancy is 2 adults and 1 child under the
                age of 2 years old in a crib. Please note that extra
                beds cannot be accommodated in this room type.
              </p>
            </div>
            <div className='modal-facilities'>
              <p className='modal-facilities-title'>
                Room Facilities:
              </p>
              <div className='modal-facilities-list-items'>
                {DataDescriptionHotelAmenities.map((item, index) => (
                  <div key={index} className='modal-facilities-item'>
                    <IconTick />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </StyledModalSelectRoom>
  );
};

const StyledModalSelectRoom = styled.div`
  .modal-container {
    width: 100%;
    height: 761px;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-family: 'DM Sans';
    font-style: normal;
    p {
      margin: 0;
    }

    .modal-price-and-image {
      width: 60%;
    }
    .modal-info {
      width: 37%;
      margin-top: 63px;
    }
  }

  .modal-title {
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
    /* identical to box height, or 160% */

    color: #000000;

    margin-bottom: 20px;
  }
  .modal-price-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      /* identical to box height, or 162% */

      color: #5e6d77;
      .text-line-through {
        text-decoration: line-through;
      }
      .text-color {
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        /* identical to box height, or 108% */

        color: #ee1d00;
      }
    }
    .ant-btn {
      width: 159px;
      height: 44px;
      background: #ff7b42;
      border: 1px solid #ff7b42;
      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        text-align: center;

        color: #ffffff;
      }
    }
  }

  .modal-basic-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .modal-info-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      svg {
        margin-right: 9px;
      }
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        /* or 188% */

        display: flex;
        align-items: center;

        color: #0069e4;
      }
    }
  }
  hr {
    border: 0;
    border-bottom: 1px solid #e5e5e5;
    margin: 20px 0;
  }
  .modal-info-inntroduce {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 4px;
    p {
      margin-bottom: 25px;
    }
  }
  .modal-facilities {
    .modal-facilities-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
    .modal-facilities-list-items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .modal-facilities-item {
        width: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        svg {
          margin-right: 12px;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }
  .body-content-image {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .body-content-image-slide {
    width: 100%;
    height: 98px;
    margin-top: 30px;
    img {
      width: 100%;
      height: auto;
      max-height: 97px;

      &:hover {
        cursor: pointer;
      }
    }
    .mySwiper .swiper-slide {
      opacity: 0.3;
    }
    .mySwiper .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
  .body-content-image-main {
    width: 100%;
    img {
      width: 100%;
      height: calc(width * 0.85);
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #ffffff;
    }
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 17px;
    }
    .swiper-button-prev {
      left: 36px;
    }
    .swiper-button-next {
      right: 36px;
    }
  }
`;
