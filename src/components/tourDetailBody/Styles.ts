import styled from 'styled-components';

export const StyledTourDetailBodyContainer = styled.div`
  width: 100%;
  margin-top: 55px;
  padding: 0 165px 0 165px;
  display: flex;
  flex-direction: column;

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
            height: 545px;
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
      flex-direction: column-reverse;
      align-items: center;
      .body-content-image {
        width: 90%;
      }
      .body-content-booking-form {
        width: 55%;
        margin-bottom: 20px;
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
      flex-direction: column-reverse;
      align-items: center;
      .body-content-image {
        width: 100%;
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
        width: 100%;
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
