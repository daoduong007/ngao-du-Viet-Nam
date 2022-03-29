import React from 'react';
import styled from 'styled-components';

import {
  DataHotelDetailOverview,
  IconTick,
  DataDescriptionHotelAmenities,
  DataDescriptionHotelAmenities2,
  DataDesciptionHotelRules,
} from '@components';

export const HotelDetailBodyDescription = () => {
  return (
    <StyledHotelBodyDescription>
      <hr className='hr-divider' />
      <div className='hotel-description-overview'>
        <p className='hotel-description-title'>Overview</p>
        {DataHotelDetailOverview.map((item, index) => (
          <p key={index}> {item}</p>
        ))}
      </div>
      <hr />
      <div className='hotel-description-amenities'>
        <p className='hotel-description-title'>Hotel Amenities</p>
        <div className='hotel-description-amenities-content'>
          <div className='list-amenities-content'>
            {DataDescriptionHotelAmenities.map((item, index) => (
              <div key={index} className='hotel-amenities-item'>
                <IconTick />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className='list-amenities-content'>
            {DataDescriptionHotelAmenities2.map((item, index) => (
              <div key={index} className='hotel-amenities-item'>
                <IconTick />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className='hotel-description-rules'>
        <p className='hotel-description-title'>Rules</p>
        <div className='hotel-description-rules-content'>
          <div>
            <p>
              <span>Checkin</span>
            </p>
            <div className='hotel-description-rules-content-time'>
              <p>02:00 pm</p>
            </div>
          </div>
          <div>
            <p>
              <span>Checkout</span>
            </p>
            <div className='hotel-description-rules-content-time'>
              <p>12:00 am</p>
            </div>
          </div>
        </div>
        <div className='hotel-description-list-rules'>
          <ul>
            {DataDesciptionHotelRules.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className='hotel-description-maps'>
        <p className='hotel-description-title'>Maps</p>
        <div className='hotel-description-maps-image'>
          <img src='/assets/ggmap.jpg' />
        </div>
      </div>
    </StyledHotelBodyDescription>
  );
};

const StyledHotelBodyDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  hr {
    margin: 0;
    border: 0;
    border-bottom: 0.5px solid #888888;
  }

  p {
    font-family: ' DM Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    /* or 26px */

    color: #4f4f4f;
  }

  .hotel-description-title {
    font-weight: bold;
    font-size: 20px;
    line-height: 160%;
    /* identical to box height, or 32px */

    color: #000000;
  }

  .hotel-description-overview {
    margin-bottom: 21px;
  }

  .hotel-description-amenities {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
      line-height: 186%;
    }
    svg {
      margin-right: 20px;
    }
    .hotel-description-amenities-content {
      margin-bottom: 51px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .list-amenities-content {
      .hotel-amenities-item {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      width: 178px;
      display: flex;
      flex-direction: column;
    }
  }

  .hotel-description-rules {
    margin-top: 32px;
    margin-bottom: 42px;
    display: flex;
    flex-direction: column;
    .hotel-description-rules-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        margin: 0;
        font-weight: bold;
        font-size: 20px;
        line-height: 160%;
        /* text tieu de */

        color: #2a2a2a;
        span {
          font-size: 16px;

          color: #ff7b42;
        }
      }
      .hotel-description-rules-content-time {
        margin-top: 10px;
        margin-bottom: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 269px;
        height: 48px;
        background: #f5f5f5;
        border-radius: 5px;
      }
    }
    .hotel-description-list-rules {
      ul {
        margin-left: -26px;
      }
      li {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 190%;
        /* or 30px */

        /* Paragraph */

        color: #4f4f4f;
      }
    }
  }
  .hotel-description-maps {
    margin-top: 41px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
    .hotel-description-rules {
      .hotel-description-rules-content {
        > div {
          width: 100%;
        }
        .hotel-description-rules-content-time {
          margin: 0;
          margin-bottom: 20px;
          width: 95%;
        }
      }
      .hotel-description-list-rules {
        li {
          font-size: 14px;
        }
      }
    }
  }
`;
