import styled from 'styled-components';

export const StyledCheckOutTalFormContainer = styled.div`
margin-top: 158px;
overflow: visible;

.check-out-total-form {
  width: 380px;
  padding: 39px 25px 0 30px;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  p {
    margin: 0;
    text-align: left;
    font-style: normal;
    font-weight: normal;
  }

  .total-form-title {
    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 100%;
      /* or 18px */
      /* tieu de */
      color: #1c1c1e;
    }
    margin-bottom: 13px;
  }
  .total-form-location {
    display: flex;
    flex-direction: row;
    margin-bottom: 13px;
    svg {
      margin-right: 14px;
    }
    p {
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      /* subcolor 1 */
      color: #636567;
    }
  }
  .total-form-desciption {
    display: flex;
    flex-direction: row;

    .total-form-duration {
      margin-right: 64px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      /* identical to box height, or 171% */
      /* subcolor 1 */
      color: #636567;
      > span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */
        /* tieu de */
        color: #1c1c1e;
      }
    }
  }
  .ant-input-affix-wrapper {
    height: 64px;
    margin-top: 20px;
    svg {
      margin-right: 17.5px;
      margin-left: 26px;
    }
  }
  .total-form-group-promo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;
    .ant-input {
      height: 56px;
    }
    .ant-btn {
      height: 56px;
      width: 111px;
      border: 1px solid #ff7b42;
      span {
        font-weight: 600;
        font-family: Poppins;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        text-align: center;
        color: #ff7b42;
      }
    }
  }
  .total-form-total {
    height: 99px;
    margin: 33px -25px 0 -30px;
    background-color: #1c1c1e;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0 25px 0 30px;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */
      color: #ffffff;
    }
  }
}
`;

export const StyledCheckOutContainer = styled.div`
width: 100%;
height: 100%;
padding: 0 165px;
display: flex;
flex-direction: row;
justify-content: space-between;
p {
  text-align: left;
  margin: 0;
}
hr {
  margin: 0;
  border: 0px;
  opacity: 0.7;
  border-bottom: 1px solid #e5e5e5;
}
.check-out-body-title {
  margin-top: 66px;
  p {
    margin: 0;
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 36px;
    line-height: 48px;
    /* identical to box height, or 133% */
    color: #2a2a2a;
  }
}
.check-out-body {
  width: 635px;
}
.traveler-details-description {
  margin-top: 19px;

  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */
  color: #2a2a2a;
  span {
    font-weight: normal;
    font-size: 16px;
    /* identical to box height, or 250% */
    color: #5e6d77;
  }
}
.traveler-details-form {
  width: 100%;
  margin-bottom: 107px;
  .traveler-details-formik {
    width: 100%;
  }
  label {
    font-weight: 600;
    font-size: 16px;
    line-height: 40px;
    /* identical to box height, or 250% */
    color: #2a2a2a;
  }
  input {
    height: 54px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      padding-left: 19px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 40px;
      /* identical to box height, or 250% */
      color: #888888;
    }
  }
}
.traveler-details-formik-rally {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.traveler-details-formik-item {
  margin-right: 16px;
  margin-bottom: 24px;
  width: 300px;

  text-align: left;
  display: flex;
  flex-direction: column;
}
.traveler-details-formik-item-special {
  padding-right: 16px;
  width: 100%;
  label {
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    /* identical to box height, or 167% */

    color: #2a2a2a;
  }
  input {
    position: relative;
    height: 138px;
    ::placeholder {
      position: absolute;
      top: 7px;
    }
  }
}
.traveler-details-formik-lead-traveler {
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */
  color: #2a2a2a;
}

.traveler-details-formik-item-address {
  padding-right: 16px;
  width: 100%;

  label {
    width: 100%;
  }
}
.traveler-details-formik-address {
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    /* identical to box height, or 200% */

    color: #2a2a2a;
  }
}
.traveler-details-formik-payment {
  display: flex;
  flex-direction: column;

  .traveler-details-formik-payment-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    label {
      width: 120px;
      display: flex;
      flex-direction: row;
      align-items: center;

      font-weight: 600;
      font-size: 16px;
      line-height: 42px;
      /* identical to box height, or 262% */

      color: #000000;
    }
    input {
      margin-right: 11px;
    }
    img {
      margin-left: 33px;
    }
  }
}
.traveler-details-formik-payment-info {
  text-align: left;
  ul {
    padding-left: 15px;
    li {
      margin-bottom: 20px;

      font-size: 14px;
      line-height: 22px;
      /* or 157% */
      color: #4f4f4f;
    }
  }
}
.traveler-details-formik-submit {
  width: 100%;
  button {
    &:hover {
      cursor: pointer;
    }
    margin-top: 18px;
    width: 100%;
    border: 0;
    background-color: #ff7b42;
    height: 56px;
    span {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */
      text-align: center;

      color: #ffffff;
    }
  }
}
`;