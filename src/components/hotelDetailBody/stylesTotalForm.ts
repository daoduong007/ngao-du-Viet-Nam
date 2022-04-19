import styled from 'styled-components';

export const StyledHotelDetailTotalForm = styled.div`
  width: 100%;
  height: 693px;
  background: #f4f4f4;
  hr {
    margin: 0;
    border: 0;
    border-bottom: 0.5px solid #888888;
  }

  p {
    margin: 0;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: #3d3e3f;

    span {
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
    }
    text-align: left;
  }

  .hotel-detail-total-form-header {
    margin: 0px 25px 0px 30px;
    padding: 30px 0 24px 0;
  }

  .hotel-detail-total-form-body {
    margin: 26px 25px 0 30px;
  }
  .total-form-body-pick-date-and-people {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: #1c1c1e;

    .total-form-body-pick-date {
      height: 64px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      background-color: #ffffff;
      svg {
        margin-left: 23px;
      }
      .ant-picker-range .ant-picker-active-bar {
        display: none;
      }
      .anticon {
        display: none;
      }
    }
    .booking-form-input-people {
      height: 64px;
      margin-bottom: 18px;
      padding: 21px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 13px;
      }

      p {
        margin: 0;

        font-weight: 400;
        font-size: 14px;
        line-height: 160%;

        color: #1c1c1e;
      }

      background-color: #ffffff;
    }
  }

  .total-form-body-pick-room-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      /* text tieu de */
      color: #2a2a2a;
    }
    .type-of-room {
      margin-right: 21px;
      width: 120px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        width: 100%;
      }
    }
    .type-of-room-checkbox {
      margin-right: 16px;
    }
    .number-of-room {
      margin-right: 30px;
      width: 80px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .total-form-body-add-ons-title {
    margin: 16px 0px;
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 42px;

      color: #2a2a2a;
    }
  }
  .total-form-body-pick-add-ons {
  }
  .total-form-body-total-money {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px 0 28px 0;
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;

      color: #1c1c1e;

      span {
        font-weight: 700;
      }
    }
  }
  .total-form-body-submit {
    button {
      width: 100%;
      height: 64px;
      background-color: #ff7b42;
      border-radius: 0;
      border: 1px solid #ff7b42;

      span {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        color: #ffffff;
      }
    }
  }
`;

export const StyledMinusPlus = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #e4e4e4;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* text tieu de */

  color: #2a2a2a;

  cursor: pointer;
  &:active {
    box-shadow: 10px #6d6c6c;
    border: 2px solid #e4e4e4;
  }
`;