import styled from 'styled-components'

export const StyleBodyListHotelContainer = styled.div`
  width: 100%;
  padding: 0 165px;
  padding-top: 21px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;

  p {
    font-family: 'DM Sans';
    font-style: normal;
  }

  .list-hotel-body-tittle {
    margin-top: 40px;
    padding-top: 20px;
    margin-bottom: 37px;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
    font-family: 'DM Sans';
    font-style: normal;
    margin: 0px;
    font-weight: 500;
    font-size: 40px;
    line-height: 100%;

    color: #1C1C1E;
    }

    .list-hotel-sort-and-filter {
      width: 30%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      
      .list-hotel-body-sort {
        display: flex;
        flex-direction: row;

        p, span {
          margin: 0;
          font-weight: 700;
          font-size: 18px;
          line-height: 160%;
        }
        p {
          color: #FF7B42;
        }

        .sort-select {
          margin-left: 15px;

          .ant-select:not(.ant-select-customize-input) .ant-select-selector {
            border: 0;
          }
          .ant-select-arrow {
            color: #4F4F4F;
            top: 15%;
            padding-left: 17px;
          }
        }
      }

      .list-hotel-body-filer {
        .ant-btn-primary {
          background-color: #1C1C1E;
          border: 1px solid #1C1C1E;
        }
      }
    }
  }
  .list-hotel-body-content {
    margin-top: 37px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;


    .content-no-data {
      width: 100%;
      h1 {
        margin: 0 auto;
      }
    }
  }

  .list-hotel-body-pagination {
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

  @media (min-width: 1441px) {
    width: 1440px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    padding: 0 50px;

    .list-hotel-body-tittle {
      h2 {
        font-size: 35px;
      }
      .list-hotel-sort-and-filter {
      width: 33%;
        .list-hotel-body-sort {
        }
      }
    }
  }

  @media (max-width: 900px) {
    .list-hotel-body-tittle {
      margin: 30px 0 ;
      h2 {
        font-size: 30px;
      }
      .list-hotel-sort-and-filter {
      width: 36%;
        .list-hotel-body-sort {
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    .list-hotel-body-tittle {
      margin: 20px 0 ;
      h2 {
        font-size: 25px;
      }
      .list-hotel-sort-and-filter {
      width: 50%;
        .list-hotel-body-sort {
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0 20px;
    .list-hotel-body-tittle {
      margin: 10px 0 ;
      flex-direction: column;
      align-items: flex-start;
      .list-hotel-sort-and-filter {
        margin-top: 20px;
        width: 100%;
        .list-hotel-body-sort {
        }
      }
    }
    .list-hotel-body-pagination {
      width: 100%;
      margin: 30px 0;
      justify-content : center;
    }
  }
`