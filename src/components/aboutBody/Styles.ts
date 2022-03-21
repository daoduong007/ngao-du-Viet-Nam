import styled from 'styled-components';

export const StyledBodyAboutContainer = styled.div`
  width: 100%;
  margin-top: 171px;
  padding:0 165px;

  display: flex;
  flex-direction: column;
  p {
    text-align: left;
  }
  @media (min-width: 2560px) {
    width: 1440px;
    margin: 0 auto;
    margin-top: 171px;
  }
  @media (max-width: 1200px) {
    margin-top: 50px;
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`