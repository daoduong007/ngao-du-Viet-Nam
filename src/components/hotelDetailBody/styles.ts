import styled from 'styled-components'

export const StyledHotelDetailBodyContainer = styled.div`
  width: 100%;
  margin-top: 55px;
  padding: 0 165px;
  display: flex;
  flex-direction: column;

  .pop-up-image-slide {
    position: fixed;
    z-index: 2000;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0,0,0,0.4  );
    display: flex;
    align-items: center;
    justify-content: center;
    
    .pop-up-content {
      height: 80vh;
      width: 1110px;
      padding: 20px 50px;
      background-color: #F4F4F4;
      border-radius: 4px;
      .pop-up-button {
        display: flex;
        justify-content: right;
        margin-right: -45px;
        margin-top: -15px; 
        .ant-btn {
        background: #FFF;
        color: #ff7b42;
        border: 1px solid #ff7b42;
        border-radius: 4px;
        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
      }


      .pop-up-image {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .pop-up-image-main {
          width: 47%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          img {
            width: 100%;
            height: auto;
          }

          > .body-content-rating-review-star {
            margin-bottom: 20px;
          }
        }
        .pop-up-image-list {
         width: 50%;
         height: 70vh;
         overflow-Y: auto;
         overflow-X: hidden;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        ::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background:#FF7B42
        }

         img {
           cursor: pointer;
           width: 150px;
           height: auto;
           &:hover {
             transform: translateY(-3px);
           }
         }
        }
      }
    }
  }

  .body-content-name {
    margin: 53px 0 21px 0;
    p {
    margin: 0;
    font-weight: 500;
    font-size: 36px;
    line-height: 100%;
    /* identical to box height, or 36px */
    color: #1C1C1E;
    }
  }
  .hotel-detail-body-content {
    text-align: left;
    width: 100%;
    
    .image-and-booking-form {
      width: 100%;
      margin-top: 38px;
      margin-bottom: 52px;
      display: flex;
      flex-direction: row;
      justify-content: space-between; 

      .count-image {
          position: absolute;
          top: 0;
          right:0;
          z-index: 1000;
          height: 100%;
          width: 21.5%;

          cursor: pointer;

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          p {
            margin: 1px 0 0 5px;
            font-weight: 700;
            font-size: 16px;
            line-height: 160%;

            color: #3D3E3F;
          }

        }

      .body-content-image {
        width: 57%;
        display: flex;
        flex-direction: column;
      }
      .body-content-image-slide {
        width: 100%;
        height: 98px;
        margin-top: 30px;
        img {
          width: 100%;
          height: auto;
          max-height: 97px;

          &:hover {
            cursor: pointer;
          }
        }
        .mySwiper .swiper-slide {
          opacity: 0.3;
        }
        .mySwiper .swiper-slide-thumb-active {
          opacity: 1;
        }
      }
      .body-content-image-main {
          width: 100%;
          img {
            width: 100%;
            height: auto;
          }
          .swiper-button-next, .swiper-button-prev {
            color: #FFFFFF;
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 17px;
          }
          .swiper-button-prev {
            left: 36px;
          }
          .swiper-button-next {
            right: 36px;
          }
      }
      .body-content-total-form {
        width: 34%;
      }
    }
  }

  .body-content-selections { 
    width:56%;
    text-align: left;

    font-family: 'DM Sans';
    font-style: normal;

    .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before {
      display: none;
    }
    .ant-tabs-tab-btn:focus, .ant-tabs-tab-remove:focus, .ant-tabs-tab-btn:active, .ant-tabs-tab-remove:active {
      color:  #FF7B42;
    }
    .ant-tabs-tab {
      font-weight: bold;
      font-size: 24px;
      line-height: 160%;
      /* or 38px */
      text-align: center;
      color: #888888;
    }
    .ant-tabs-ink-bar {
      display: none;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #FF7B42;
    }
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {  
      width: 100%;
      justify-content: space-between;
    }
  }

  .body-content-location {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 21px;
    svg {
      margin-right: 14px;
    }
    p {
      margin: 0;
      font-size: 16px;
      line-height: 160%;

      color: #636567;
    }
  }

  .body-content-rating-review-star {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin: 0;

      font-size: 14px;
      line-height: 160%;
      display: flex;
      align-items: center;
      /* subcolor 1 */

      color: #636567;
      span {
        font-weight: bold;
        font-size: 12px;

        color: #FFFFFF;
      }
    }
    .body-content-rating {
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 25px;
      background-color: #FF7B42;
    }
    .body-content-star {
      margin-left: 25px;
    }
  }


  .hotel-detail-recommend {
    margin-top: 76px;
    margin-bottom: 118px;
    text-align: left;
    .hotel-detail-recommend-title {
      margin-bottom: 32px;
      p {
      margin: 0;
      font-weight: 600;
      font-size: 28px;
      line-height: 160%;

      color: #1C1C1E;
      }
    }
  }

  @media (min-width: 1441px) {
    width: 1440px;
    margin: 0 auto;
    margin-top: 50px;

    .pop-up-image-slide {
      .pop-up-content {
        width: 1110px;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 0 50px;

    .pop-up-image-slide {
      .pop-up-content {
        padding: 20px 20px;
        width: 90%;
        .pop-up-button {
          margin-right: -15px;  
          .ant-btn {
            transform: scale(0.7,0.7);
          }
        }
        .pop-up-image {
          .pop-up-image-main {
            width: 55%;
          }
          .pop-up-image-list {
            width: 40%;
          }
        }
      }
    }

    .hotel-detail-body-content {
      .image-and-booking-form {
        .body-content-image {
          width: 55%;
        }
        .body-content-total-form {
          width: 40%;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .pop-up-image-slide {
      .pop-up-content {
        .pop-up-image {
          flex-direction: column;
          align-items: center;
          .pop-up-image-main {
            width: 80%;
            margin-bottom: 20px;
          }
          .pop-up-image-list {
            width: 90%;
            height: 28vh;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .hotel-detail-body-content {
      .body-content-name { 
        p {
          font-size: 30px;
        }
      }
      .image-and-booking-form {
        .body-content-image {
          width: 55%;
        }
        .body-content-total-form {
          width: 40%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    margin-top: 20px;

    .pop-up-image-slide {
      .pop-up-content {
        padding: 20px 0px;
        width: 95%;
        height: 90vh;

        .pop-up-button {
          margin-right: 0px;  
        }
      }
    }

    .hotel-detail-body-content {
      .body-content-name {
        margin: 25px 0;
        text-align: center;
        p {
          font-size: 30px;
        }
      }
      .image-and-booking-form {
        margin-bottom: 0;
        flex-direction: column;
        align-items: center;
        .body-content-image {
          width: 100%;
          margin-bottom: 30px;
        }
        .body-content-total-form {
          width: 380px;
          margin-bottom: 30px;
        }
      }
      .body-content-selections { 
        width: 100%;
      }
    }
    .hotel-detail-recommend {
      margin: 30px 0;
      .hotel-detail-recommend-title {
        p {
          font-size: 24px;
        }
      }
    }
  }
  
  @media (max-width: 600px) {
    padding: 0 20px;
    margin-top: 10px;
    .hotel-detail-body-content {
      .body-content-name {
        p {
          font-size: 25px;
        }
      }

      .image-and-booking-form {
        margin-bottom: 0;
        .body-content-image {
          margin-bottom: 20px;
        }
        .body-content-image-main {
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
        }
        .body-content-image-slide {
          display: none;
        }
        .body-content-total-form {
          width: 300px;
        }
      }

      .body-content-selections {
        width: 100%;

        .ant-tabs-tab {
          font-size: 18px;
          margin: 0;
        }
      }
    }
    .hotel-detail-recommend {
      .hotel-detail-recommend-title {
        p {
          font-size: 20px;
        }
      }
    }
  }
`