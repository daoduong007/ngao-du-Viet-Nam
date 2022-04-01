import styled from 'styled-components';

export const StyledHeaderAbout = styled.div`
  width: 100%;
  height: 400px;

  background-image: url('/assets/bannerAbout.png');
  background-repeat: no-repeat;
  background-size: 100% auto; 

  font-family: 'DM Sans';
  font-style: normal;

  .about-header-title {
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
      font-weight: 500;
      font-size: 3.75rem;
      line-height: 100%;

      color: #FFFFFF; 
    }
  }



  @media (min-width: 2540px) {
    height: 49vh;
    background-size: cover;
    .about-header-title { 
      p {
        font-size: 6rem;
      }
    }
  }

  @media (min-width: 3280px) {
    height: 43vh;
    .about-header-title { 
      p {
        font-size: 8rem;
      }
    }
  }

  @media (max-width: 1200px){
    height: 300px;
    background-size: 100% 300px;;

    .about-header-title { 
      height: 60%;
      p {
        font-size: 50px;
      }
    }
  }
  @media (max-width: 768px){
    height: 300px;
    background-size: 100% 300px;;

    .about-header-title { 
      height: 50%;
      p {
        font-size: 40px;
      }
    }
  }
  @media (max-width: 600px){
    height: 200px;
    background-size: 100% 200px;

    .about-header-title { 
      height: 20%;
      p {
        font-size: 30px;
      }
    } 
  }
`
