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
  IconDropDown,
} from '@components';

export const TourDetailDescription = () => {
  const { Panel } = Collapse;
  return (
    <StyledTourDetailDescription>
      <hr />
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
      </div>
      <hr />
      <div className='descriptions-tour-itinerary'>
        <div className='descriptions-title'>
          <p>Tour Itinerary</p>
        </div>
        <div>
          {DataTourItinerary.map((item) => (
            <div
              key={item.id}
              className='descriptions-content-collapse'
            >
              <Collapse
                expandIconPosition='right'
                bordered={false}
                ghost={true}
              >
                <Panel
                  showArrow={false}
                  extra={<IconDropDown />}
                  header={item.day}
                  key={item.id}
                >
                  <div className='itinerary-collapse-item'>
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
              </Collapse>
            </div>
          ))}
        </div>
      </div>
      <div className='descriptions-maps'>
        <div className='descriptions-title'>
          <p>Maps</p>
        </div>
        <div className='descriptions-map-image'>
          <img src='/assets/ggmap.jpg' />
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
  width: 100%;
  p {
    margin: 0px;

    font-family: 'DM Sans';
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
    height: 64px;
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
  .descriptions-panoramic-image-video {
    width: 100%;
    .panoramic-image {
      margin-bottom: 50px;
    }
    .panoramic-video {
      width: 100%;
    }
  }

  .descriptions-maps {
    margin-bottom: 50px;
    width: 100%;
    .descriptions-map-image {
      margin-top: 26px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .descriptions-tour-itinerary {
    .descriptions-content-collapse {
      margin-bottom: 19px;
    }
    .itinerary-collapse-item {
      p {
        font-size: 16px;
        line-height: 30px;

        color: rgba(30, 30, 30, 0.8);
      }
      .itinerary-collapse-item-title {
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
          font-weight: bold;
          color: #04316a;
        }

        svg {
          margin-left: -31px;
          margin-right: 13px;
        }
      }
      .itinerary-collapse-item-footer {
        margin-top: 26px;
        span {
          font-weight: bold;
        }
      }
    }
    .ant-collapse-content > .ant-collapse-content-box {
      padding: 16px 45px;
    }
    .ant-collapse-item-active .ant-collapse-extra svg {
      transform: rotate(180deg);
      transition-duration: 0.3s;
    }
    .ant-collapse {
      border-radius: 8px;
      background: #f4f4f4;
    }
    .ant-collapse-item {
      border: 0px;
    }
    .ant-collapse-item > .ant-collapse-header {
      padding: 12px 16px;
      background: #fff;
      border: 1px solid #c4c4c4;
      border-radius: 8px;
    }
    .ant-collapse-item-active > .ant-collapse-header {
      background: #f4f4f4;
      border: 0;
      border-radius: 8px;
    }
  }

  @media (max-width: 1200px) {
    .descriptions-map-image {
      margin-bottom: 0;
    }
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 600px) {
    * > p {
      font-size: 14px !important;
    }
    .descriptions-title {
      margin: 10px 0;
      height: 40px;
      p {
        font-size: 18px !important;
      }
    }
  }
`;
