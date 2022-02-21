import styled from 'styled-components';

export const StyledBodyAboutContainer = styled.div`
  width: 100%;
  margin-top: 171px;
  padding:0 165px 0 165px;
  p {
    text-align: left;
  }

`
export const StyledBodyAboutIntroduceContainer2 = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: space-between;

  .body-about-introduce {
    width: 512px;
    span {
      color: #FF7B42;
    }
  }

  .body-about-introduce-img {
    width: 540px;
  }
`

export const StyledBodyAboutIntroduceContainer3 = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;  
  .body-about-introduce-title {
    width: 591px; 
    p {
      margin-top: 60px;
      margin-bottom:48px;
      align-items: center;
    }
  }
  .body-about-introduce-content {
    display: flex;
    
    div {
      width: 502px;
      &:last-child { 
        margin-left: 69px;
      }
    }
  }
`

export const StyledBodyAboutIntroduceContainer4 = styled.div`
  margin-top: 122px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: row;  
  justify-content: space-between;

  .body-about-introduce {
    width: 540px;
  }
`

