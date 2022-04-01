import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 100vw;
  height: 766px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url('/assets/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  .header-content {
    padding: 0 165px;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-right: 165px;
  }
  .header-slogan-and-feature {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header-search {
    display: flex;
    justify-content: left;

    width: 445px;
    height: 100%;
    .ant-tabs {
      width: 100%;
    }
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.704) 1.52%,
      rgba(255, 255, 255, 0.64) 100%
    );

    display: flex;
    flex-direction: column;
    .ant-tabs {
      height: 100%;
    }
    .ant-tabs-top > .ant-tabs-nav,
    .ant-tabs-bottom > .ant-tabs-nav,
    .ant-tabs-top > div > .ant-tabs-nav,
    .ant-tabs-bottom > div > .ant-tabs-nav {
      margin: 0;
    }
    .ant-tabs-top > .ant-tabs-nav::before,
    .ant-tabs-bottom > .ant-tabs-nav::before,
    .ant-tabs-top > div > .ant-tabs-nav::before,
    .ant-tabs-bottom > div > .ant-tabs-nav::before {
      border: 0;
    }
  }

  @media (min-width: 2540px) {
    height: 80vh;
    background-size: cover;
    .header-slogan-and-feature {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      .header-slogan {
      }
      .header-feature {
        display: flex;
      }
    }
    .header-search {
      width: 800px;
      .ant-tabs-nav-list {
        height: 90px;
      }
    }
  }

  @media (min-width: 3280px) {
    height: 70vh;
    .header-search {
      width: 1000px;
      .ant-tabs-nav-list {
        height: 100px;
      }
    }
  }
  @media (max-width: 1200px) {
    height: auto;
    .header-content {
      width: 100%;
      margin-top: 20px;
      padding: 0 50px;
    }
    .header-slogan-and-feature {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .header-feature {
        margin-left: -50px;
      }
    }
    .header-search {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    background-size: contain;
    .header-content {
      margin-top: 60px;
      width: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .header-slogan-and-feature {
      .header-slogan {
        display: flex;
        justify-content: center;
        h1,
        h2 {
          text-align: center;
        }
      }
    }
    .header-search {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ccc;
      width: 350px;
    }
  }
  @media (max-width: 600px) {
    .header-search {
      width: 300px;
    }
  }
  @media (max-width: 450px) {
    .header-content {
      margin-top: 0px;
    }
    .header-search {
      margin-top: 0px;
    }
  }
`;
