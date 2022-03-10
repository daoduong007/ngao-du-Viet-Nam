import styled from 'styled-components'

export const StyledHotelDetailBodyContainer = styled.div`
  width: 100%;
  padding: 0 165px;
  display: flex;
  flex-direction: column;

  .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar, .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-ink-bar, .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar, .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-ink-bar{
    height: 0;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-between;
  }
  .ant-tabs-tab {
    width: 100%;
    margin: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 160%;
    /* or 38px */

    text-align: center;

    color: #888888;
  }

  .ant-tabs-tab-btn {
    margin: 0 auto;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #FF7B42;
  }

  .hotel-detail-body-content-and-total-form{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  }

  .hotel-detail-body-total-form {
    width: 380px; 
    margin-top: 300px;
  } 
  .hotel-detail-body-content {
    text-align: left;
    width: 635px;
  }
  .hotel-detail-body-screenname {
    display: flex;
    flex-direction: row;
    margin-top: 21px;
    p {
      margin: 0;
      margin-right: 24px;
      line-height: 160%;
      text-align: center;
      /* noi dung */
      color: #3D3E3F;
    }
    svg {
      margin-right: 24px;
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
    /* tieu de */
    color: #1C1C1E;
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
      /* identical to box height, or 26px */
      /* subcolor 1 */
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
  .body-content-image {
    width: 100%;
    height: 635px;
    margin-top: 37px;
    margin-bottom: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .body-content-image-slide {
    height: 97px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .hotel-detail-body-tabs-content {
    margin-top: 72px;
  }

  .hotel-detail-recommend {
    margin-top: 76px;
    margin-bottom: 118px;
    text-align: left;
    .hotel-detail-recommend-title {
      p {
      margin: 0;
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 160%;
      /* tieu de */

      color: #1C1C1E;
      }
    }
    .hotel-detail-recommend-content {
      display: flex;
      flex-direction: row;
    }

  }
`