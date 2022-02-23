import styled from 'styled-components';

export const StyledTourDetailBodyContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 135px 0 165px;
  display: flex;
  flex-direction: column;

  .tour-detail-body-screenname {
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

      /* noi dung */

      color: #3D3E3F;
    }
    >div {
      margin-right: 24px;
    }
  }

  >hr {
    margin: 29px 0 55px 0;
    border: 1px solid #E5E5E5;
    width: 100%;
  }

  .tour-detail-related-tour {
    margin: 111px 0 150px 0;
    display: flex;
    flex-direction: column;

    .related-tour-title {
    margin-bottom: 60px;
    display: flex;
    align-items: left;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 160%;
    /* identical to box height, or 45px */
    /* tieu de */
    color: #1C1C1E;
    }

    .related-tour-content>div {
    margin-right: 30px;
    margin-left: 0px;
   }
   .related-tour-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   }

  }
`
