import styled from 'styled-components';

export const StyledCheckOutContainer = styled.div`
width: 100%;
height: 100%;
padding: 0 165px;
display: flex;
flex-direction: column;

h1,h2,h3 {
  text-align: left;

  font-family: 'DM Sans';
  font-style: normal;
  line-height: 2.5rem;  
  font-weight: 600;
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.25rem;
}

h3 {
  font-size: 1rem;
  span {
    color: red;
  }
}

.help {
  margin-top: 5px;
  color: red;
} 
p {
  text-align: left;
  margin: 0;

  font-family: 'DM Sans';
  font-style: normal;
}
hr {
  margin: 0;
  border: 0px;
  opacity: 0.7;
  border-bottom: 1px solid #e5e5e5;
}
.check-out-title {
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .check-out-body-content {
    width: 58%;
  }

  .traveler-details-description {
    margin-top: 19px;
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
    width: 47.3%;

    text-align: left;
    display: flex;
    flex-direction: column;

    span {
      color : red;
    }
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
    position: relative;
    margin-bottom: 31px;

    .ant-space-vertical {
      width: 100%;

      .ant-space-item {
        display: flex;
        align-items: left;
        cursor: pointer;

        width: 100%;
      }
      img {
        position: absolute;
        left: 150px;
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
}

@media (min-width: 1441px) {
    width: 1440px;
    margin: 0 auto;
  }
  @media (max-width: 1399px ) {
    padding: 0 50px;
    .check-out-body {
      .check-out-body-content {
        width: 50%;
        .traveler-details-formik-item {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 900px ) {
    padding: 0 30px;
    .check-out-body {
      .check-out-body-content {
        width: 45%;
      }
    }
  }
  @media (max-width: 768px ) {
    padding: 0 20px;
    .check-out-title { 
      margin-top: 30px;
      padding: 0 20px;
    }
    .check-out-body {
      flex-direction: column-reverse;
      align-items: center;
      .check-out-body-content {
        width: 95%;
        .traveler-details-formik-item {
          margin-right: 0;
        }
      }
    }
  }
  @media (max-width: 600px ) {
    .check-out-title { 
      margin-top: 20px;
      padding: 0 ;
      margin: 10px 0;
      >p {
        margin: 0;
        text-align: center;

        font-size: 30px;
      }
    }
  }
`;