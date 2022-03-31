import styled from 'styled-components';

export const StyledTourDetailBodyContainer = styled.div`
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
          .pop-up-info {
            width: 100%;
            margin-bottom: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p {
              margin: 0;
              font-family: 'DM Sans';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 160%;

              color: #636567;
            }
            .location, .evaluate  {
              display: flex;
              flex-direction: row;
            }
            .location svg {
                margin-right: 14px;
              }
            .evaluate-stars {
              margin-right: 14px;
              p {
                margin: 0;

                font-weight: bold;
                font-size: 14px;
                line-height: 160%;
                /* or 22px */
                color: #FFFFFF;
              }
              width: 60px;
              height: 25px;
              display: flex;
              flex-direction: row;
              align-items: center;  
              justify-content: space-evenly;

              background: #FF7B42;
            }
          }
        }
        .pop-up-image-list {
         width: 50%;
         height: 540px;
         overflow-Y: auto;
         overflow-X: hidden;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;

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

  .tour-detail-related-tour {
    margin: 111px 0 150px 0;

    .related-tour-title {
    margin-bottom: 60px;
    display: flex;
    align-items: left;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 160%;

    color: #1C1C1E;
    }

   .related-tour-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   }
  }

  .tour-detail-body-content {
    margin-top: 53px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
    }
    .body-content-title {
      p {
        font-weight: 500;
        font-size: 36px;
        line-height: 100%;
        /* tieu de */
        color: #1C1C1E;

        margin-bottom: 0px;
      }
      width: 745px;
      margin-bottom: 23px;
      text-align: left;
    }
    .location-and-evaluate {
      .body-content-location {
        p {
          margin: 0;
          margin-left: 14px;
          line-height: 160%;

          color: #636567;
        }
        width: 243px;
        margin-bottom: 16px;
        display:flex;
        flex-direction: row;
        align-items: center;
      }

      .body-content-evaluate {
        width: 168px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .evaluate-stars {
          p {
            margin: 0;

            font-weight: bold;
            font-size: 14px;
            line-height: 160%;
            /* or 22px */
            color: #FFFFFF;
          }
          width: 65px;
          height: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;  
          justify-content: space-evenly;

          background: #FF7B42;
        }
        .evaluate-reviews {
          p {
            margin: 0;
            font-size: 14px;
            line-height: 160%;
            /* or 22px */
            /* subcolor 1 */
            color: #636567;
          }
        }
      }
    }

    .body-content-image-and-booking-form {
      width: 100%;
      margin-top: 38px;
      margin-bottom: 52px;
      display: flex;
      flex-direction: row;
      justify-content: space-between; 

      .body-content-image {
        width: 57%;
        display: flex;
        flex-direction: column;
      }
      .body-content-image-slide {
        width: 100%;
        height: 98px;
        margin-top: 30px;

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
        img {
          width: 100%;
          height: auto;
          max-height: 97px;

          &:hover {
            cursor: pointer;
          }
        }
        .mySwiper .swiper-slide-visible {
          opacity: 0.3;
          &:nth-child(4) {
          }
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
      .body-content-booking-form {
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

    .ant-tabs-nav {
      margin-bottom: 18px;
    }

    .additional-items {
      ul {
        margin: 30px 0 42px -25px;
      }
      li {
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
    }
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
      /* or 187% */
      color: #04316A;
      }

    .ant-collapse-content > .ant-collapse-content-box {
      padding-left: 48px;
      padding-bottom: 24px;
    }
    .additional-faq {
      position: relative;
      .icon-quest-mark {
        position: absolute;
        left: -11px;
        top: 20px;
      }
    }
  }

@media (min-width: 1441px) {
  width: 1440px;
  margin: 0 auto;
  margin-top: 100px;

  .pop-up-image-slide {
      .pop-up-content {
        width: 1110px;
      }
    }
}
@media (max-width: 1200px) {
  padding: 0 50px;
  margin-top: 30px;
  .tour-detail-body-content {
    .body-content-image-and-booking-form .body-content-image {
    width: 55%;
    }
    .body-content-image-and-booking-form .body-content-booking-form {
      width: 40%;
    }
  }
  .tour-detail-related-tour {
    margin: 50px 0;
  }

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

@media (max-width: 900px){
  padding: 0 20px;
  margin-top: 20px;

  .tour-detail-body-content{
    margin-top: 30px;
    justify-content: center;
    .body-content-title {
      width: 100%;
      margin: 0;
      text-align: center;
      p {
        font-size: 30px;
      }
    }
    .location-and-evaluate {
      margin-top: 20px;
    }
  }
  .body-content-selections {
      width: 100%;
  }
}

@media (max-width: 768px) {
  .tour-detail-body-content{
    margin-top: 30px;
    justify-content: center;
    .body-content-title {
      width: 100%;
      margin: 0;
      text-align: center;
      p {
        font-size: 35px;
      }
    }
    .body-content-image-and-booking-form {
      flex-direction: column;
      align-items: center;
      .body-content-image {
        width: 90%;
        margin-bottom: 30px;
      }
      .body-content-booking-form {
        width: 55%;
      }
    }
    .location-and-evaluate {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      .body-content-location {
        margin: 0;
      }
    }
    .body-content-selections {
      width: 100%;
    }
  }

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
}
@media (max-width: 600px) {
  .tour-detail-body-content{

    .body-content-title {
      p {
        font-size: 25px;
      }
    }
    .body-content-image-and-booking-form {
      margin: 30px 0;
      .body-content-image {
        width: 100%;
        .swiper-button-next, .swiper-button-prev {
          display: none;
        }
        .body-content-image-slide { 
          display: none;
        }
        .body-content-image-main { 
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .body-content-booking-form {
        width: 300px;
        margin-bottom: 20px;
      }
    }
    .location-and-evaluate {
      margin-top: 30px;
      display: flex;
      justify-content: space-evenly;
    }
    .body-content-selections {
      width: 100%;

      .ant-tabs-tab {
        font-size: 18px;
        margin: 0;
      }
    }
  }
  .tour-detail-related-tour{
    margin-top: 20px;
    .related-tour-title {
      margin-bottom: 10px;
    }
  } 
}
`
