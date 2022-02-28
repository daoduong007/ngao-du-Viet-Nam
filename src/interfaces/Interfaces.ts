import React from 'react';

export interface IIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export interface ITourDetail {
  id: number,
  imgUrl: string,
  location:string,
  title: string,
  timeDepature: string,
  price: string,
}

export interface ITourBooking {
  tourtype?: string;
  duration: string;
  price: string;
}

export interface ITourDetailReviewComment {
  data: {
    avatar: string;
    star: number;
    title: string;
    time: string;
    content: string;
  }
}
