import styled from 'styled-components';

export const StyledTourDetailHeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  p {
    color: #1C1C1E;
  }

  hr {
  width: 100%;
  margin: 25px 0 0 0;
  border: 0;
  border-bottom: 1px solid #C5C7C9;
  }

  @media (max-width: 600px){
    height: 60px;
    >div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 30px;
      height: 50px;
      .app-bar-logo {
        display: none;
      }
    }
    hr{ 
      margin: 0;
    }
  }
`