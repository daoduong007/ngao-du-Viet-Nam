import React, { useState } from 'react';
import styled from 'styled-components';

import { IHotelDetail } from '@interfaces';
import {
  TourDetailReviewComment,
  DataHotelDetailReviews,
  DataHotelDetailReviews2,
  IconPrevPage,
  IconNextPage,
} from '@components';
import { Pagination } from 'antd';

interface IHotelDetailReview {
  data: IHotelDetail;
}

export const HotelDetailBodyReview = (props: IHotelDetailReview) => {
  const { data } = props;
  const [currentReviewPage, setCurrentReviewPage] =
    useState<number>(1);

  const handleChangeReviewPage = (page: number) => {
    setCurrentReviewPage(page);
  };
  return (
    <StyledHotelDetailBodyReview>
      <hr className='hr-divider' />
      <div className='hotel-detail-overview'>
        <div className='hotel-detail-rating'>
          <p>{data.rating}</p>
        </div>
        <div className='hotel-detail-review'>
          <p className='hotel-detail-review-evaluate'>Wonderful</p>
          <p>
            Base on <span>{data.review} reviews</span>
          </p>
          <button>Write a review</button>
        </div>
      </div>
      <div className='hotel-detail-list-comment'>
        {currentReviewPage === 1 ? (
          <>
            {DataHotelDetailReviews.map((item, index) => (
              <div key={index} className='hotel-detail-comment'>
                <TourDetailReviewComment key={index} data={item} />
                <hr />
              </div>
            ))}
          </>
        ) : (
          <>
            {DataHotelDetailReviews2.map((item, index) => (
              <div key={index} className='hotel-detail-comment'>
                <TourDetailReviewComment key={index} data={item} />
                <hr />
              </div>
            ))}
          </>
        )}
      </div>
      <div className='hotel-detail-review-pagination'>
        <Pagination
          defaultCurrent={1}
          total={15}
          prevIcon={<IconPrevPage />}
          nextIcon={<IconNextPage />}
          onChange={(page) => {
            handleChangeReviewPage(page);
          }}
        />
      </div>
    </StyledHotelDetailBodyReview>
  );
};

const StyledHotelDetailBodyReview = styled.div`
  width: 100%;

  .hr-divider {
    margin: 0;
    border: 0;
    border-bottom: 0.5px solid #888888;
  }
  hr {
    margin: 21px 0 30px 0;
    border: 0;
    border-bottom: 0.5px solid rgba(136, 136, 136, 0.5);
    width: 100%;
  }

  .hotel-detail-overview {
    display: flex;
    flex-direction: row;
    margin-top: 33px;
    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      /* identical to box height */

      text-align: left;

      color: #4f4f4f;
      span {
        font-weight: bold;
      }
    }
    .hotel-detail-rating {
      width: 148px;
      height: 148px;
      margin-right: 28px;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #ff7b42;
      p {
        margin: 0;

        font-weight: 600;
        font-size: 56px;
        line-height: 84px;
        /* identical to box height */

        text-align: right;

        color: #ffffff;
      }
    }
    .hotel-detail-review-evaluate {
      margin: 0;
      font-weight: 500;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */

      color: #2a2a2a;
    }

    button {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */

      text-align: center;

      color: #ff7b42;
      :hover {
        cursor: pointer;
      }
      :active {
        border: 2px solid #ff7b42;
      }
      width: 194px;
      height: 48px;

      border: 1px solid #ff7b42;
      box-sizing: border-box;
      background-color: #ffffff;
    }
  }

  .hotel-detail-list-comment {
    margin-top: 33px;
    margin-bottom: 39px;
    display: flex;
    flex-direction: column;

    .review-comment-rating {
      p {
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;

        color: #ff7b42;
      }
    }
    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      /* or 187% */
      color: #4f4f4f;
      > span {
        font-weight: 600;
        line-height: 150%;
        /* or 24px */
        color: #2a2a2a;
      }
    }

    .review-comment-header {
      display: flex;
      flex-direction: row;
      .review-comment-avatar {
        margin-right: 27px;
        width: 83px;
        height: 83px;
        border-radius: 50%;
        overflow: hidden;
      }
      img {
        object-fit: contain;
      }
    }
  }

  .hotel-detail-review-pagination {
    margin-top: 31px;
    li {
      padding-top: 8.5px;
      width: 47.11px;
      height: 47.11px;
      margin-right: 24px;
      background: #e8e9ea;
      opacity: 0.7;
    }
    .ant-pagination-item {
      font-weight: bold;
      font-size: 16px;
      border: 0px;
      a {
        color: #4f4f52;
        &:hover {
          color: #4f4f52;
        }
      }
    }

    .ant-pagination-item-active {
      background-color: #1c1c1e;
      opacity: 1;
      padding: 0;
      padding-top: 8.5px;
      a {
        color: #ffffff;
        &:hover {
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .hotel-detail-review-pagination {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      li:last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 600px) {
    .hotel-detail-review-pagination {
      li {
        padding-top: 0px;
        width: 30px;
        height: 30px;
      }
      .ant-pagination-item-active {
        padding-top: 0px;
      }
    }
    .hotel-detail-list-comment {
      p {
        font-size: 14px;
      }
    }
  }
`;
