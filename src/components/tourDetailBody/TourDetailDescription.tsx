import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import {
  DataDescriptionOverview1,
  DataDescriptionOverview2,
  DataDescriptionInclude,
  DataTourItinerary,
  DataTourDetailLocation,
  TourDetailImage360,
  TourDetailVideo,
  IconTick,
  IconLocation,
} from '@components';

export const TourDetailDescription = () => {
  const { Panel } = Collapse;
  return (
    <StyledTourDetailDescription>
      <div className='descriptions-ovrerview'>
        <div className='descriptions-title'>
          <p>Overview</p>
        </div>
        <p>{DataDescriptionOverview1}</p>
        <ul>
          {DataDescriptionOverview2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div className='descriptions-included'>
        <div className='descriptions-title'>
          <p>What is Included</p>
        </div>
        {DataDescriptionInclude.map((item, index) => (
          <div key={index} className='descriptions-included-item'>
            <IconTick />
            <p> {item}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className='descriptions-depature-end'>
        <div className='descriptions-title'>
          <p>Departure Return</p>
        </div>
        <div className='descriptions-depature-content'>
          <p>
            <span>Departure Point</span>
          </p>
          <p>1: Molo Beverello, 80133 Napoli NA, Italy</p>
          <p>
            2: Hotel Il Faro, Via Marina Piccola, 5, 80067 Sorrento
            NA, Italy
          </p>
        </div>
        <div className='descriptions-depature-content'>
          <p>
            <span>Departure Time</span>
          </p>
          <p>8:00 AM</p>
        </div>
        <div></div>
      </div>
      <hr />
      <div className='descriptions-tour-itinerary'>
        <div className='descriptions-title'>
          <p>Tour Itinerary</p>
        </div>
        <div>
          <Collapse
            defaultActiveKey={['1']}
            expandIconPosition='right'
          >
            {DataTourItinerary.map((item) => (
              <Panel header={item.day} key={item.id}>
                <div
                  key={item.id}
                  className='itinerary-collapse-item'
                >
                  {DataTourDetailLocation.map((item, index) => (
                    <div key={index}>
                      <div className='itinerary-collapse-item-title'>
                        <IconLocation color={'#04316A'} />
                        <p>
                          <span>{item.title}</span>
                        </p>
                      </div>
                      <p>{item.content}</p>
                      <div className='itinerary-collapse-item-footer'>
                        <p>
                          <span>Duration :</span>
                          {item.duration}
                        </p>
                        <p>{item.admission}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
      <div className='descriptions-maps'>
        <div className='descriptions-title'>
          <p>Maps</p>
          <div className='descriptions-map-image'>
            <img src='/assets/ggmap.jpg' />
          </div>
        </div>
      </div>
      <div className='descriptions-panoramic-image-video'>
        <div className='descriptions-title'>
          <p>360° Panoramic Images and Videos</p>
        </div>
        <div className='panoramic-image'>
          <TourDetailImage360 />
        </div>
        <div className='panoramic-video'>
          <TourDetailVideo />
        </div>
      </div>
    </StyledTourDetailDescription>
  );
};

const StyledTourDetailDescription = styled.div`
  /* padding-left: 25px; */
  p {
    margin: 0px;

    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
  }
  hr {
    border: 0px;
    border-bottom: 0.5px solid #888888;
    margin: 0px;
  }

  .descriptions-title {
    margin-bottom: 14px;
    margin-top: 29px;
    p {
      font-weight: bold;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */
      color: #2a2a2a;
    }
  }

  .descriptions-ovrerview {
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 40px;
    /* or 187% */
    color: #4f4f4f;
    > p {
      margin-bottom: 26px;
    }
  }

  .descriptions-included {
    margin-bottom: 40px;
  }
  .descriptions-included-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      margin-left: 20px;

      font-size: 16px;
      line-height: 30px;
      /* or 187% */
      color: #4f4f4f;
    }
  }
  .descriptions-depature-end {
    margin-bottom: 19px;
  }
  .descriptions-depature-content {
    margin-bottom: 18px;
    p {
      font-size: 16px;
      line-height: 30px;
      /* or 187% */
      color: rgba(30, 30, 30, 0.8);
      > span {
        font-weight: bold;
      }
    }
  }
  .itinerary-collapse-item {
    p {
      margin-left: 35px;
      font-size: 16px;
      line-height: 30px;
      /* or 187% */
      color: rgba(30, 30, 30, 0.8);
    }
    .itinerary-collapse-item-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      svg {
        margin-right: 17px;
      }
      span {
        margin-left: -35px;
        font-weight: bold;
        color: #04316a;
      }
    }
    .itinerary-collapse-item-footer {
      margin-top: 26px;
      span {
        font-weight: bold;
      }
    }
  }
  .panoramic-image {
    margin-bottom: 50px;
  }
  .descriptions-maps {
    margin-bottom: 50px;

    .descriptions-map-image {
      margin-top: 26px;
      height: 398px;
      img {
        width: 100%;
      }
    }
  }
`;
