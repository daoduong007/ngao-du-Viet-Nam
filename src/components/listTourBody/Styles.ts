import styled from 'styled-components';

export const StyledListTourBodyContainer = styled.div`
  margin-top: 100px;
  padding-left: 165px;
  padding-right: 135px;

  display: flex;
  flex-direction: column;

  .listtour-body-screenname {
    display: flex;
    flex-direction: row;
    p {
      margin: 0px;

      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;

      text-align: center;
    }

    .ant-breadcrumb,.ant-breadcrumb > span {
      display: flex;
      flex-direction: row;
    }
    .ant-breadcrumb-separator {
      margin: 0 24px;
    }
  }

  .listtour-body-tittle {
    height: 80px;
    margin-top: 60px;
    margin-bottom: 60px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;

    p { 
      width: 551px;
      text-align: left;

      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 100%;

      color: #1C1C1E;
    }
    div {
      display: flex;
      align-items: flex-end;
    }
  }

  .listtour-body-filer {
    button {
      width: 75px;
      height: 38px;

      span {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */
        color: #FFFFFF;
      }
    }
    .ant-btn-primary {
      border-color: #1c1c1e;
      background: #1c1c1e;
     }
     .ant-popover-arrow {
       display :none;
     }
  }

  .listtour-body-content {
    width: 100%;
  }
  .listtour-body-pagination {
    margin: 63px 30px 150px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    ul {
      display: flex;
      align-items: center;

      font-family: 'DM sans';
      font-style: normal;
      li,button {
        width: 47.1px;
        height: 47.1px;
        margin: 0;
        margin-left: 24px;
        border: 0;

        background: #E8E9EA;
        opacity: 0.7;
      }
      button {
        border: 0;
        margin-left: 0px;
        
      }
      .ant-btn-icon-only {
        vertical-align: 0;
      }
      .ant-pagination-item {
        display: flex;
        align-items: center;
        justify-content: center;
        a {

          font-weight: 700;
          font-size: 16px;
          line-height: 120%;

          color: #4F4F52;
        }
      }
      .ant-pagination-item-active{ 
        background: #1C1C1E;
        opacity: 1;
        a {

          font-weight: 700;
          font-size: 16px;
          line-height: 120%;

          color: #FFFFFF;
        }
      }
    }
  }

  @media (min-width:1441px){
    width: 1440px;
    margin: 0px auto;
    margin-top: 100px;
  }

  @media (max-width: 1200px) {
    margin-top: 50px;
    padding-left: 50px;
    padding-right: 20px;
    
    .listtour-body-tittle {
      p {
        font-size: 35px;
      }
    }

    .listtour-body-pagination  {
      margin: 50px 0px 50px 0;
      padding-right: 30px;
    }
  }


  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 0px;

    .listtour-body-tittle {
      p {
        font-size: 25px;
      }
    }
    
    .listtour-body-pagination  {
      width: 100%;
      margin-bottom: 30px;
      padding-right: 54px;
      justify-content: center;

      ul {
        li,button {
        width: 30px;
        height: 30px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    margin-top: 90px;
    padding: 0 20px;
  }
`

export const StyledListTourBodyFilter = styled.div`
  width:351px;
  margin: -12px -16px;
  padding : 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid #CCCCCC;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.2);
  .ant-rate-star-zero{
    display: none;
  }
  .list-tour-filter-title{
    margin-bottom:0 0 20 0px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    display: flex;
    align-items: center;

    color: #2A2A2A;
  }

  .list-tour-divider {
    border: 1px solid #E5E5E5;
    width: 301px;
    margin: 0px;
  }

  .list-tour-filter-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > p {
      margin: 0px;

      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      text-transform: uppercase;

      color: #03387D;
    }
  }

  .list-tour-filter-budget {
    margin-top: 20px;
    margin-bottom: 25px;
    .ant-slider-track {
      background-color: #FF7B42;
    }
    .ant-slider-handle {
      border: solid 2px #FF7B42;
    }
  }

  .list-tour-filter-duration , .list-tour-filter-typetour{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    .ant-checkbox-wrapper {
      margin-bottom: 20px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #2A2A2A;
    }
  }


  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin-left: 0px;
    }

  .list-tour-filter-submit {
    .ant-btn {
      width: 100%;
      background-color: #FF7B42;
      span {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;

        text-align: center;

        color: #FFFFFF;
      }
    }
    .ant-btn-primary {
        border-color: #FF7B42;
        height: 48px;
      }
  }
`
