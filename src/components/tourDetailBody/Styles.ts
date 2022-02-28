import styled from 'styled-components';

export const StyledTourDetailBodyContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 135px 0 165px;
  display: flex;
  flex-direction: column;

  .tour-detail-body-screenname {
    display: flex;
    flex-direction: row;
    p {
      margin-right: 24px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      text-align: center;

      /* noi dung */

      color: #3D3E3F;
    }
    >div {
      margin-right: 24px;
    }
  }

  .tour-detail-related-tour {
    margin: 111px 0 150px 0;
    display: flex;
    flex-direction: column;

    .related-tour-title {
    margin-bottom: 60px;
    display: flex;
    align-items: left;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 160%;
    /* identical to box height, or 45px */
    /* tieu de */
    color: #1C1C1E;
    }

    .related-tour-content>div {
    margin-right: 30px;
    margin-left: 0px;
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
    .body-content-location {
      p {
        margin-left: 14px;
        line-height: 160%;
        /* identical to box height, or 26px */
        /* subcolor 1 */
        color: #636567;
      }
      width: 243px;
      display:flex;
      flex-direction: row;
      
    }
    .body-content-evaluate {
      width: 168px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .evaluate-stars {
        p{
          margin-bottom: 0px;

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
          font-size: 14px;
          line-height: 160%;
          /* or 22px */
          /* subcolor 1 */
          color: #636567;
        }
      }
    }
    .body-content-image-and-booking-form {
      width: 100%;
      margin-top: 38px;
      display: flex;
      flex-direction: row;
      justify-content: space-between; 

      .body-content-image {
        display: flex;
        flex-direction: column;
      }
      .body-content-image-slide {
        margin-top: 30px;
        width: 635px;
        height: 98px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .body-content-image-main {
          width: 635px;;
          height: 545px;
          img {
            width: 100%;
            height: 100%;
          }
      }
    }

  }

  .body-content-selections {
    width: 631px;
    text-align: left;
    margin-left: -25px;
    margin-top: 52px;

    .ant-tabs {
      padding-left: 25px;
    }
    .ant-tabs-tab {
      font-family: DM Sans;
      font-style: normal;
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
    .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before {
      border-bottom: 0.5px solid #888888;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #FF7B42;
    }

    .additional-items {
      ul {
        margin: 30px 0 42px -25px;

      }
      li {
      font-family: DM sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
    }
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      margin-left: 23px;

      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
      /* or 187% */
      color: #04316A;
      }
    .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
      padding: 16px 20px;
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
`

export const StyledTourDetailBookingForm = styled.div`
  width: 380px;
  height: 500px;
  padding: 0 25px 0 30px;
  background-color: #F4F4F4;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  .booking-form-price {
    height: 86px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin-bottom: 0px;

      line-height: 160%;
      /* or 22px */
      /* noi dung */
      color: #3D3E3F;
      span {
        margin-left: 8px;

        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        /* identical to box height, or 32px */
        text-align: right;
        /* noi dung */
        color: #3D3E3F;
      }
    }
    
  }

  .booking-form-divider {
    margin: 0px;
    width: 100%;
    border: 1px solid #C5C7C9;
  }

  .booking-form-description {
    width: 255px;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;

    span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */
        /* tieu de */
        color: #1C1C1E;

    }
        
    p {
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */
        /* subcolor 1 */
        color: #636567;
      }
  }

  .booking-form-input >div {
    height: 64px;
    margin-bottom: 18px;
  }
  .booking-form-input {
    .booking-form-input-time {
      display: flex;
    }
    .booking-form-input-people {
      display: flex;
    }
    svg {
      margin-right: 17.5px;
      margin-left: 26px;
    }
    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #FF7B42;
    }
    .ant-input-affix-wrapper {
      border: 1px solid #FFFFFF;
    }
  }

  .booking-form-total {
    margin-bottom: 37px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */
      /* tieu de */
      color: #1C1C1E;
    }
    span {
      font-weight: bold;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */
      text-align: right;
      /* tieu de */
      color: #1C1C1E;
    }
  }

  .booking-form-submit {
    margin-top: 0px;
    width: 100%;
    height: 64px;

    .ant-btn-primary { 
    width: 100%;
    height: 100%;
    color: #fffFFF;
    border-color: #FF7B42;
    background:#FF7B42;
    }

    span {
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      color: #FFFFFF;
    }
  }

`
