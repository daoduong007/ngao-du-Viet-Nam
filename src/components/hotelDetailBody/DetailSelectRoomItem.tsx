import React, { useState } from 'react';
import { Button } from 'antd';

import {
  IconAcreage,
  IconBed,
  IconGuestBold,
  IconImage,
} from '@components';
import { IDetailSelectRoom } from '@interfaces';
import clsx from 'clsx';

interface ISelectRoom {
  room: IDetailSelectRoom;
  onClick: (id: number) => void;
}
export const DetailSelectRoomItem = (props: ISelectRoom) => {
  const { room, onClick } = props;

  const [isSelectedRoom, setIsSelectedRoom] = useState(false);

  const handleSelectedRoom = () => {
    setIsSelectedRoom((prev) => !prev);
  };
  return (
    <div className='select-room-items'>
      <div
        className='select-room-image'
        onClick={() => onClick(room.id)}
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
                    isSelectedRoom === false && 'not-selected-room',
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
  );
};
