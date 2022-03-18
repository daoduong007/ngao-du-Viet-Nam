import styled from 'styled-components';

export const StyledHeaderAbout = styled.div`
  width: 100%;
  height: 400px;

  background-image: url('/assets/bannerAbout.png');
  background-repeat: no-repeat;
  background-size: 100% 100%; 

  font-family: 'DM Sans';
  font-style: normal;

  .menu-app-bar{
    display: none;
  }

  .header-app-bar {
    width: 100%;
    padding: 0 165px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      color: #FFFFFF;
      &:hover {
        cursor: pointer;
        color: #FF7B42;
      }
    }
    .app-bar-directional {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .about-header-title {
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 500;
      font-size: 60px;
      line-height: 100%;
      /* identical to box height, or 60px */


      color: #FFFFFF; 
    }
  }

  @media (min-width: 3280px) {
  .header-app-bar{
    .app-bar-directional {
      width: 30%;
    }
  }
  .about-header-title { 
    p {
      font-size: 80px;
    }
  }
}

@media (max-width: 1200px){
  background-size: 100% 300px;;
  .header-app-bar {
    padding: 10px 30px ;
    .app-bar-directional {
      width: 40%;
    }
  }
  .about-header-title { 
    height: 20%;
    p {
      font-size: 50px;
    }
  }
}
@media (max-width: 768px){
  background-size: 100% 300px;;
  .header-app-bar {
    padding: 10px 30px ;
    .app-bar-directional {
      width: 50%;
    }
  }
  .about-header-title { 
    height: 20%;
    p {
      font-size: 40px;
    }
  }
}
@media (max-width: 600px){
  background-size: 100% 200px;
  .header-app-bar {
    padding: 10px 30px ;
    >.app-bar-directional {
      display: none;
    }
  }
  .about-header-title { 
    height: 10%;
    p {
      font-size: 30px;
    }
  }
  .menu-app-bar{
    display: flex;
    svg {
      cursor: pointer;
      width: 30px;
      height: 30px;

      color: #FFFFFF;
    }
  }  
}
`
