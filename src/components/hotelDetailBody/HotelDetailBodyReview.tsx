import React from 'react';
import styled from 'styled-components';

import { IHotelDetail } from '@interfaces';
import {
  TourDetailReviewComment,
  DataHotelDetailReviews,
  IconPrevPage,
  IconNextPage,
} from '@components';
import { Pagination } from 'antd';

interface IHotelDetailReview {
  data: IHotelDetail;
}

export const HotelDetailBodyReview = (props: IHotelDetailReview) => {
  const { data } = props;
  return (
    <StyledHotelDetailBodyReview>
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
        {DataHotelDetailReviews.map((item, index) => (
          <>
            <TourDetailReviewComment key={index} data={item} />
            <hr />
          </>
        ))}
      </div>
      <div className='hotel-detail-review-pagination'>
        <Pagination
          defaultCurrent={1}
          total={15}
          prevIcon={<IconPrevPage />}
          nextIcon={<IconNextPage />}
        />
      </div>
    </StyledHotelDetailBodyReview>
  );
};

const StyledHotelDetailBodyReview = styled.div`
  width: 100%;
  hr {
    &:last-child {
      display: none;
    }
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
      font-family: DM Sans;
      font-style: normal;
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

        font-family: Poppins;
        font-style: normal;
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
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */

      color: #2a2a2a;
    }

    button {
      font-family: DM Sans;
      font-style: normal;
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
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;

        color: #ff7b42;
      }
    }
    p {
      font-family: Poppins;
      font-style: normal;
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
`;
