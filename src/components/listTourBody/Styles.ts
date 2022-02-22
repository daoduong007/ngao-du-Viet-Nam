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

  .listtour-body-content > div {
      margin-left: 0px;
      margin-right: 30px;
  }

  .listtour-body-content {
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