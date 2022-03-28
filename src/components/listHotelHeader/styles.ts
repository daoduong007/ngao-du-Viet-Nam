import styled from 'styled-components'

export const StyledHotelsHeaderContainer = styled.div<{url? : string}>`
  width: 100%;
  height: 666px;

  /* background-image: url('/assets/BannerHotels.png'); */
  background-image: url(${props => (props.url ? props.url : '/assets/BannerHotels.png')});
  background-repeat: no-repeat;
  background-size: 100% 666px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header-content {
    display: flex;
    flex-direction: row;
    padding: 0 165px;

    .header-slogan-and-feature {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .header-slogan {
      p {
        text-align: left;
        font-weight: bold;
        font-size: 16px;
        line-height: 160%;

        color: #FFF2CF;
        span {
          font-weight: 500;
          font-size: 60px;
          line-height: 100%;
          /* or 60px */
          color: #FFFFFF;
        }
      }
    }
    .header-feature {
      position: relative;
      left: -165px;
      bottom: -1px;
      width: calc(100% + 165px) ;
      height: 99px;
      background-color: #FFFFFF;
    }
    .header-search {
      padding: 0; 
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.592) 100%);
     
      p {
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;

        color: #1C1C1E;
      }
      .ant-btn {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          margin-right: 16px;
        }
      }
      .ant-btn-primary {
          background-color:#FF7B42;
          border: 1px solid #FF7B42;
        }
    }
  }
  @media (max-width: 1200px){
    .header-content {
      width: 100%;
      padding: 0 50px;
      .header-search {
      margin-right: 0px;
      }
    }
    .header-feature {
      display: none;
    }

  }
  @media (max-width: 600px) {
    height: 650px;
    background-size: 100% 200px;
    
    .header-slogan-and-feature {
      display: none;  
    }
    .header-content {
      width: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .header-content >.header-search {
      margin: 0; 
      margin-top: 55px;
      width: 90%;
      background-color: #ccc;
    }
  }
  @media (max-width:419px){
    .header-content >.header-search {
      margin-top: 45px;
    }
  }

`