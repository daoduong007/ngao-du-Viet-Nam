import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Progress, Rate, Pagination, Input } from 'antd';

import {
  DataTourDetailReviews,
  DataTourDetailReviews2,
  DataTourDetailReviewsNumberOfreview,
  TourDetailReviewComment,
  IconPrevPage,
  IconNextPage,
  IconStar,
  IconAvatar,
} from '@components';

interface IReview {
  star?: number;
  review?: number;
}
export const TourDetailReview = (props: IReview) => {
  const { star, review } = props;
  const { TextArea } = Input;
  const [inputComment, setInnputComment] = useState<string>('');
  const [currentReviewPage, setCurrentReviewPage] =
    useState<number>(1);

  const handleInputCommentChange = (e) => {
    setInnputComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    setInnputComment('');
  };

  const handleChangeReviewPage = (page: number) => {
    setCurrentReviewPage(page);
  };
  return (
    <StyledTourDetailReview>
      <hr />
      <div className='tour-detail-review-evaluate'>
        <div className='review-evaluate-star'>
          <div>
            <p>
              <span className='star'>{star}/5</span>
            </p>
          </div>
          <Rate defaultValue={4} />
          <p>
            Based on <span className='review'>{review} reviews</span>
          </p>
        </div>

        <div className='review-evaluate-number-of-review'>
          {DataTourDetailReviewsNumberOfreview.map((item, index) => (
            <div
              key={index}
              className='review-evaluate-number-of-review-item'
            >
              <p>{item.star}</p>
              <IconStar color={'#C4C4C4'} />
              <Progress
                percent={item.numberOfReview}
                showInfo={false}
                strokeColor={'#FFB612'}
                trailColor={' #E5E5E5'}
              />
              <p>{item.numberOfReview} reviews</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className='tour-detail-review-comment-form'>
        <div className='comment-form'>
          <div className='comment-form-avatar'>
            <IconAvatar />
          </div>
          <div className='comment-form-text-area'>
            <TextArea
              rows={5}
              placeholder='Type anything'
              value={inputComment}
              onChange={(e) => {
                handleInputCommentChange(e);
              }}
            />
          </div>
        </div>
        <div className='comment-form-submit'>
          <Button
            type='primary'
            className=''
            onClick={handleCommentSubmit}
          >
            Commnent
          </Button>
        </div>
      </div>
      <hr />
      <div className='tour-detail-review-comments'>
        {currentReviewPage === 1 ? (
          <>
            {DataTourDetailReviews.map((item, index) => (
              <>
                <TourDetailReviewComment key={index} data={item} />
                <hr className='divider-review-comment' />
              </>
            ))}
          </>
        ) : currentReviewPage === 2 ? (
          <>
            {DataTourDetailReviews2.map((item, index) => (
              <>
                <TourDetailReviewComment key={index} data={item} />
                <hr className='divider-review-comment' />
              </>
            ))}
          </>
        ) : null}
      </div>

      <div className='tour-detail-review-pagination'>
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
    </StyledTourDetailReview>
  );
};

const StyledTourDetailReview = styled.div`
  hr {
    border: 0px;
    width: 100%;
    border-bottom: 0.5px solid #888888;
    margin: 0px;
  }

  .tour-detail-review-evaluate {
    position: relative;
    margin-top: 30px;
    margin-bottom: 37px;
    padding: 36px 34px 37px 0;
    height: 291px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;

    background: #f4f4f4;
    p {
      margin: 0;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 26px;
      /* identical to box height, or 186% */
      color: #4f4f4f;
    }

    .review-evaluate-star {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        .star {
          font-weight: 600;
          font-size: 48px;
          line-height: 72px;
          /* identical to box height */
          color: #2a2a2a;
        }
        .review {
          font-weight: bold;
        }
      }
    }
    .review-evaluate-number-of-review {
      width: 100%;
      display: flex;
      flex-direction: column;

      .review-evaluate-number-of-review-item {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .ant-progress-line {
    width: 50%;
  }
  .tour-detail-review-comment-form {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    margin-bottom: 33px;

    .comment-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .comment-form-avatar {
        width: 56;
        height: 56;
        margin-right: 13px;
      }
      .comment-form-text-area {
        width: 100%;
        textarea.ant-input:focus,
        textarea.ant-input:hover {
          border: 1px solid #ff7b42;
          box-shadow: none !important;
        }
      }
    }

    .comment-form-submit {
      height: 44px;
      display: flex;
      justify-content: right;
      margin-top: 24px;

      button {
        width: 170px;
        height: 100%;
        background-color: #ff7b42;
        border: 1px solid #ff7b42;

        span {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          text-align: center;

          color: #ffffff;
        }
      }
    }
  }

  .tour-detail-review-comments {
    margin-top: 33px;
    margin-bottom: 39px;
    display: flex;
    flex-direction: column;
    hr {
      &:last-child {
        display: none;
      }
      border: 0px;
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      margin: 39px 0;
    }
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;

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

    .review-comment-content {
      height: 90px;
      overflow: hidden;
    }
  }
  .tour-detail-review-pagination {
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
    .ant-pagination-next {
      margin-right: 0;
    }
  }

  @media (max-width: 900px) {
    .tour-detail-review-pagination {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 600px) {
    .tour-detail-review-evaluate {
      padding: 0;
      width: 100%;
      height: 340px;
      flex-direction: column;
      p {
        font-size: 12px;
      }
      .review-evaluate-star {
        p {
          .star {
            font-size: 30px;
          }
          .review {
            font-size: 14px;
          }
        }
      }
    }
    .tour-detail-review-comments {
      p {
        font-size: 12px;
        span {
          font-size: 14px;
        }
      }
    }
  }
`;
