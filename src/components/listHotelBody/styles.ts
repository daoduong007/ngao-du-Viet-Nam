import styled from 'styled-components'

export const StyleBodyListHotelContainer = styled.div`
  width: 100%;
  padding-left: 165px;
  display: flex;
  flex-direction: column;

  p {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  .list-hotel-body-screenname {
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
  .list-hotel-body-tittle {
    margin-top: 60px;
    padding-right: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
    margin: 0px;
    font-weight: 500;
    font-size: 40px;
    line-height: 100%;
    /* identical to box height, or 40px */
    /* tieu de */
    color: #1C1C1E;
    }
    p.text-color {
      width: 100%;
      margin-right: 18px;

      font-weight: bold;
      font-size: 18px;
      line-height: 160%;
      /* identical to box height, or 29px */
      color: #FF7B42;
    }
    span {
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    }

    .list-hotel-body-sort {
      display: flex;
      flex-direction: row;
    } 
    .ant-select-arrow {
      top: 13px;
    }
    .ant-select {
      width: 100%;
    }
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      border: 0;
    }
    .list-hotel-sort-and-filter {
      display: flex;
      flex-direction: row;
    }
    .list-hotel-body-filer {
      margin-left: 91px;
      .ant-btn-primary {
        background-color: #1C1C1E;
        border: 1px solid #1C1C1E;
      }
    }
  }
  .list-hotel-body-content {
   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    text-align: left;

  }

  .list-hotel-body-pagination {
    margin: 79px 150px 72px 0;
    display: flex;
    justify-content: flex-end;
    li {
      margin-right: 24px;
      width: 47px;
      height: 47px;
      background: #E8E9EA;
      opacity: 0.7;
      button {
      background: #E8E9EA;
      opacity: 0.7;
      }
      a {
        margin-top: 12px;

        font-family: Apercu Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 120%;
        /* or 19px */


        /* text noi dung */

        color: #4F4F52;
      }
    }
    .ant-pagination-item-active {
      background-color:  #1C1C1E;
      border-color: #1C1C1E;
      a{
        color: #FFFFFF;
      }
      
    }
    

  }
`