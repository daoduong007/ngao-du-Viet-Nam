import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 100vw;
  height: 766px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url('/assets/banner.jpg');
  background-repeat: no-repeat;
  background-size: 100% 766px;

  .header-content {
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
  @media (min-width: 3280px) {
    background-size: 100% 100%;
    .header-content {
      width: 90%;
    }
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
  }
  @media (max-width: 1200px) {
    background-size: 100% 100%;

    .header-content {
      width: 100%;
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
    background-size: 100% 200px;
    .header-content {
      width: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .header-slogan-and-feature {
      .header-feature {
        display: none;
      }
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
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ccc;
      width: 400px;
    }
  }
  @media (max-width: 600px) {
    .header-search {
      width: 90%;
    }
  }
`;
