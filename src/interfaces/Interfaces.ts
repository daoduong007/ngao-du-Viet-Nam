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