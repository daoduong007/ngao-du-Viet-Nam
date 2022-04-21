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
  price: number,
  star?: number,
  review?: number,
  duration?: number,
  typeTour?: string,
  rating? : number,
  name?: string
}

export interface ITourBooking {
  tourtype?: string;
  duration: string;
  price: string;
}

export interface ITourDetailReviewComment {
  data: {
    avatar: string;
    star?: number;
    rating?: number;
    title: string;
    time: string;
    content: string;
  }
}

export interface ICheckOutFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address?: string;
  city?: string;
  province?: string;
  zipCode?: string;
  country?: string;
  specialRequiment?: string;
  paymentMethod?: '' | 'creditCard' | 'paypal';
}

export interface IHotelDetail {
  id: number;
  imgUrl: string;
  star: number;
  location:  string;
  name:  string;
  rating: number;
  review: number;
  price: number | string;
}

export interface IDetailSelectRoom {
  id: number,
  imgUrl: string,
  name: string,
  acreage: string,
  bed:string,
  guest: number,
  price: number,
  outOfRoom: boolean,
}


export interface IInitState {
  tour: {
    bookingTour : {
      idTour: number;
    }
  }
}