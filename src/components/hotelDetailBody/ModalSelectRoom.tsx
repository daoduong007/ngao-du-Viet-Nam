import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

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
            <div className='modal-image'>
              <img src={hotelSelected.imgUrl} />
            </div>
            <div className='modal-slide-image'>
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
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
              {DataDescriptionHotelAmenities.map((item, index) => (
                <div key={index} className='modal-facilities-item'>
                  <IconTick />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </StyledModalSelectRoom>
  );
};

const StyledModalSelectRoom = styled.div`
  .modal-container {
    height: 761px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    font-family: 'DM Sans';
    font-style: normal;
    p {
      margin: 0;
    }

    .modal-price-and-image {
      width: 633px;
    }
    .modal-info {
      width: 422px;
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

  .modal-image {
    margin-bottom: 24px;
    img {
      width: 100%;
      height: 422px;
    }
  }
  .modal-slide-image {
    height: 93px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .modal-info {
    margin-top: 70px;
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
    .modal-facilities-item {
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
`;
