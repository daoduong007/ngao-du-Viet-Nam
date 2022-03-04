import React from 'react';
import { Rate } from 'antd';

import { ITourDetailReviewComment } from '@interfaces';

export const TourDetailReviewComment = (
  props: ITourDetailReviewComment,
) => {
  const { avatar, rating, star, title, time, content } = props.data;
  return (
    <>
      <div className='review-comment-header'>
        <div className='review-comment-avatar'>
          <img src={avatar} />
        </div>
        <div>
          <div className='review-comment-rating'>
            {star ? (
              <Rate disabled defaultValue={star} />
            ) : (
              <p>Rating {rating} . Wonderful</p>
            )}
          </div>

          <div className='review-comment-title'>
            <p>
              <span>{title}</span>
            </p>
          </div>
          <div className='review-comment-time'>
            <p>{time}</p>
          </div>
        </div>
      </div>
      <div className='review-comment-content'>
        <p>{content}</p>
      </div>
    </>
  );
};
