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

  .tour-detail-body-content {
    margin-top: 53px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
    }
    .body-content-title {
      p {
        font-weight: 500;
        font-size: 36px;
        line-height: 100%;
        /* tieu de */
        color: #1C1C1E;

        margin-bottom: 0px;
      }
      width: 745px;
      margin-bottom: 23px;
      text-align: left;
    }
    .body-content-location {
      p {
        margin-left: 14px;
        line-height: 160%;
        /* identical to box height, or 26px */
        /* subcolor 1 */
        color: #636567;
      }
      width: 243px;
      display:flex;
      flex-direction: row;
      
    }
    .body-content-evaluate {
      width: 168px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .evaluate-stars {
        p{
          margin-bottom: 0px;

          font-weight: bold;
          font-size: 14px;
          line-height: 160%;
          /* or 22px */
          color: #FFFFFF;
        }
        width: 65px;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;  
        justify-content: space-evenly;

        background: #FF7B42;
      }
      .evaluate-reviews {
        p {
          font-size: 14px;
          line-height: 160%;
          /* or 22px */
          /* subcolor 1 */
          color: #636567;
        }
      }
    }
    .body-content-image-and-booking-form {
      width: 100%;
      margin-top: 38px;
      display: flex;
      flex-direction: row;
      justify-content: space-between; 

      .body-content-image {
        display: flex;
        flex-direction: column;
      }
      .body-content-image-slide {
        margin-top: 30px;
        width: 635px;
        height: 98px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .body-content-image-main {
          width: 635px;;
          height: 545px;
          img {
            width: 100%;
            height: 100%;
          }
      }
    }
  }
`
