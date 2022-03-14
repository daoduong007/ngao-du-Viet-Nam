import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'antd';

import {
  DataHotelSelectRoom,
  IconAcreage,
  IconBed,
  IconGuestBold,
  IconImage,
  ModalSelectRoom,
} from '@components';
import clsx from 'clsx';

export const HotelDetailBodySelectRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [IdHotelSelected, setIdHotelSelected] = useState<any>();
  const [isSelectedRoom, setIsSelectedRoom] = useState(false);

  const handleSelectedRoom = () => {
    setIsSelectedRoom((prev) => !prev);
  };
  const handleShowModal = (id) => {
    setIsModalVisible(true);

    setIdHotelSelected(id);
  };
  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledHotelDetailBodySelectRoom>
      <Modal
        visible={isModalVisible}
        closable={false}
        footer={null}
        width={1170}
      >
        <ModalSelectRoom
          idRoom={IdHotelSelected}
          onClick={handleClose}
        />
      </Modal>
      <p>Room</p>
      {DataHotelSelectRoom.map((room, index) => (
        <div key={index} className='select-room-items'>
          <div
            className='select-room-image'
            onClick={() => handleShowModal(room.id)}
          >
            <img src={room.imgUrl} />
            <div className='select-room-image-icon'>
              <IconImage />
            </div>
          </div>
          <div className='select-room-content'>
            <div className='select-room-name'>
              <p>{room.name}</p>
            </div>
            <div className='select-room-info'>
              <div className='select-room-info-item'>
                <IconAcreage />
                <p>{room.acreage}</p>
              </div>
              <div className='select-room-info-item'>
                <IconBed />
                <p>{room.bed}</p>
              </div>
              <div className='select-room-info-item'>
                <IconGuestBold />
                <p>{room.guest} Guest</p>
              </div>
            </div>
            <div className='select-room-convenient'>
              <p>
                Air Conditioning • Airport Transport • Restaurant
                <span> • 15 more</span>
              </p>
            </div>
            <div className='select-room-button-and-price'>
              <div className='select-room-button'>
                {room.outOfRoom ? (
                  <div className='button-out-of-room'>
                    <Button>Out of Room</Button>
                  </div>
                ) : (
                  <div className='button-select-room'>
                    <Button
                      onClick={handleSelectedRoom}
                      className={clsx(
                        isSelectedRoom === true && 'selected-room',
                        isSelectedRoom === false &&
                          'not-selected-room',
                      )}
                    >
                      Select Room
                    </Button>
                  </div>
                )}
              </div>
              <div className='select-room-price'>
                <p>
                  <span>${room.price}</span>/night
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </StyledHotelDetailBodySelectRoom>
  );
};

const StyledHotelDetailBodySelectRoom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    /* or 32px */

    color: #000000;
  }

  .select-room-items {
    cursor: pointer;
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
  }
  .select-room-image {
    position: relative;
    .select-room-image-icon {
      position: absolute;
      top: 6px;
      left: 7px;
    }
  }
  .select-room-content {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;

    background-color: #f8f8f8;

    .select-room-name {
      p {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        /* or 27px */

        /* text tieu de */

        color: #2a2a2a;
      }
    }

    .select-room-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        /* identical to box height, or 163% */

        display: flex;
        align-items: center;

        color: #4f4f4f;
      }

      .select-room-info-item {
        display: flex;
        flex-direction: row;
        svg {
          margin-right: 10px;
        }
      }
    }
    .select-room-convenient {
      p {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height, or 149% */

        /* sub color */

        color: #888888;
      }
    }
    .select-room-button-and-price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        /* or 145% */

        text-align: right;

        color: #888888;

        span {
          font-weight: 600;
          font-size: 18px;
          line-height: 23px;
          /* identical to box height, or 126% */

          text-align: right;

          color: #ee1d00;
        }
      }
    }

    .button-select-room {
      width: 170px;
      height: 44px;
      .selected-room {
        border-radius: 1px;
        border: 1px solid #ff7b42;
        background-color: #ff7b42;
        span {
          color: #ffffff;
        }
      }
      .not-selected-room {
        border-radius: 1px;
        border: 1px solid #ff7b42;
        background-color: #f8f8f8;
      }
      span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        /* or 149% */

        text-align: center;

        color: #ff7b42;
      }
    }
    .button-out-of-room {
      width: 170px;
      height: 44px;
      button {
        border-radius: 1px;
        border: 0;
        background: #223143;
        cursor: not-allowed;
      }
      span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        /* or 149% */

        text-align: center;

        color: #ffffff;
      }
    }
  }
`;
