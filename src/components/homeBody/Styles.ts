import styled from 'styled-components';

export const StyledBodyContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  padding:0 165px 0 165px;
`

export const StyledBodyIntroduceContainer = styled.div`

  position: relative;
  width: 100%;
  height: 623px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: row;

.body-introduce-image {
  width: 540px;
}

.body-introduce-document {
  margin-left: 200px;
  width: 512px;
  display: flex;
  flex-direction: column;
  text-align:left;
  .introduce-title-title-color {
    color: #FF7B42;
  }
}
`

export const StyledBodyIntroduceImageBelow = styled.img`
margin-left: 50px;
  position: relative;
  left: 0;
  top: 0;
`

export const StyledBodyIntroduceImageAbove = styled.img`
  position: relative;
  left: 193px;
  top:-265px;

`

export const StyledBodyIntroduceTitle = styled.div`
  p {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 550;
    font-size: 40px;
    line-height: 100%;
    /* or 40px */

    color: #1C1C1E;
  }
`

export const StyledBodyIntroduceContent = styled.div`
  display: flex;
  flex-direction: row;
  p{
  
    padding-left: 50px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    /* or 26px */

    color: #3D3E3F;
    }
`
export const StyledBodyAboutIntroduceContent = styled(StyledBodyIntroduceContent)`
  flex-direction: column;
  p {
    padding-left: 0;
  }
`

export const StyledBodyTourContainer = styled.div`
  width: 100%;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  .attractive-tour-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 100%;
      /* or 40px */
      /* tieu de */

      color: #1C1C1E;
      text-align: left;
    }
    .body-button {
      padding-right: 15px;
    }

  }
  .attractive-tour-list-item {
    position: relative;   
    display :flex;
    flex-direction: row;
  }
  .list-item-load-more {
    position: relative;
    top: 125px;
    svg {
      :hover {
        cursor: pointer;
      }
    }
  }
  .list-item-prev {
    display: none;
  }
`

export const StyledBodyTourListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const StyledBodyTourItem = styled.div`
  &:not(:first-child) {
     margin-left: 30px;
  }
  &:last-child {
    margin-right: 34px;
  }
  width: 350px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */
    /* subcolor 1 */
    color: #636567;
  }
  .item-title { 
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    /* tieu de */
    color: #1C1C1E;
  }
  .item-location {
    display: flex;
    flex-direction: row;
    margin: 19px 0 11px 5px;
    svg {
      margin-right: 14px;
    }
  }
  .item-title {
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      /* tieu de */

      color: #1C1C1E; 

      text-align: left;
    }

  }
  .item-infomation {
    display: flex;
    flex-direction: row;
    .item-infomation-time {
      display: flex;
      flex-direction: row;
      svg {
        margin-right: 14px;
      }
    }
    .item-infomation-price {
      margin-left: 95px;
    }

  }
`
export const StyledBodyDiscoverItem = styled.div`
  &:not(:first-child) {
     margin-left: 30px;
  }
  &:last-child {
    margin-right: 34px;
  }
  width: 255px;
  display: flex;
  flex-direction: column;
  div {
    text-align: left;
  }
  .item-location {
    height: 32px;
    margin-top: 12px;
    margin-bottom: 0px;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */
      /* tieu de */
      color: #1C1C1E;
    }
  }
  .item-infomation {
    margin-top: 2px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      /* or 21px */
      /* subcolor 1 */
      color: #636567;
    }
  }
`
export const StyledBodySubscribeMail = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .body-subscribe-mail-title {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 100%;
    /* or 40px */
    /* tieu de */
    color: #1C1C1E;
    text-align: left;
    span {
      color: #FF7B42;
    }
  }
  .body-input-mail {
    display: flex;
    flex-direction: row;
    width: 392px;
    height: 48px;
    .ant-btn {
      height: 48px;
      padding: 13px 33px 13px 33px;
      margin-left: 21px;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      color: #FFFFFF;
    }
    .ant-btn-primary {
      border-color: #1c1c1e;
      background: #1c1c1e;
    }
    .ant-input-affix-wrapper {
      border: 1px solid #636567;
      padding: 0px;
      box-sizing: border-box;
    }
    .anticon > * {
      color: #FF7B42;
      font-size: 16px;
    }
    svg {
      margin: 20px 15px 16px 20px;
    }
  }
`