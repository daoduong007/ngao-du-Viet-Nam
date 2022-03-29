import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

import {
  DataHotelSelectRoom,
  ModalSelectRoom,
  DetailSelectRoomItem,
} from '@components';

export const HotelDetailBodySelectRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [IdHotelSelected, setIdHotelSelected] = useState<any>();

  const handleShowModal = (id) => {
    setIsModalVisible(true);

    setIdHotelSelected(id);
  };
  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledHotelDetailBodySelectRoom>
      <hr className='hr-divider' />
      <p>Room</p>
      {DataHotelSelectRoom.map((item, index) => (
        <div key={index}>
          <DetailSelectRoomItem
            room={item}
            onClick={handleShowModal}
          />
        </div>
      ))}

      <Modal
        centered={true}
        visible={isModalVisible}
        closable={false}
        onCancel={handleClose}
        footer={null}
        mask={true}
        maskClosable={true}
        width={'80%'}
      >
        <ModalSelectRoom
          idRoom={IdHotelSelected}
          onClick={handleClose}
        />
      </Modal>
    </StyledHotelDetailBodySelectRoom>
  );
};

const StyledHotelDetailBodySelectRoom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .hr-divider {
    margin: 0;
    border: 0;
    border-bottom: 0.5px solid #888888;
  }

  p {
    font-family: 'DM sans';
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
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        /* or 27px */

        color: #2a2a2a;
      }
    }

    .select-room-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;

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
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;

        color: #888888;
      }
    }
    .select-room-button-and-price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;

        text-align: right;

        color: #888888;

        span {
          font-weight: 600;
          font-size: 18px;
          line-height: 23px;

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

  @media (max-width: 600px) {
    .select-room-content {
      .select-room-name {
        p {
          font-size: 14px;
        }
      }
      .select-room-info {
        p {
          font-size: 14px;
        }
      }
      .select-room-convenient {
        p {
          font-size: 12px;
        }
      }
    }
    .select-room-items {
      flex-direction: column;
      align-items: center;
      .select-room-image {
        width: 60%;
        margin-bottom: 20px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .select-room-items {
      .select-room-image {
        width: 90%;
      }
    }
  }
`;
