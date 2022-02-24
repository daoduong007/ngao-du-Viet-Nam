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
      margin-right: 24px;

      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      text-align: center;
    }
    > div {
      margin-right: 24px;
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
      /* or 40px */
      /* tieu de */
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

  .listtour-body-content >div{
      margin-left: 0px;
      margin-right: 30px;
  }

  .listtour-body-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .listtour-body-pagination {
    padding-left: 380px;
    margin-top: 63px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .listtour-body-pagination-button {
      > button {
        margin-left: 24px;
      }

      .ant-btn-primary {
        color: #4F4F52;
        background-color: #E8E9EA;
      }
      .ant-btn {
        width: 47.11px;
        height: 47.11px;
        border: 0px;
      }
      .ant-btn-primary:hover, .ant-btn-primary:focus {
        color: #FFFFFF;
        background-color: #1C1C1E;
      }
    }
  }
`

export const StyledListTourBodyFilter = styled.div`
  width:351px;
  height: 785px;
  padding : 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid #CCCCCC;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.2);

  .list-tour-filter-title{
    margin-bottom:0 0 20 0px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

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
      /* identical to box height */
      /* text tieu de */
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
        /* identical to box height, or 24px */
        text-align: center;

        color: #FFFFFF;
      }
    }
    .ant-btn-primary {
        border-color: #FF7B42;
      }
  }
`
