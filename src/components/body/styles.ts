import styled from 'styled-components';

export const StyledBodyContainer = styled.div`
  width: 100%;
`

export const StyledBodyIntroduceContainer = styled.div`
  margin-top: 200px;
  padding:0 165px 0 165px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;

.body-introduce-image {
  width: 540px;
}

.body-introduce-document {
  margin-left: 200px;
  width: 512px;
  display: flex;
  flex-direction: column;
  text-align:left;
  .introduce-title-title-color {
    color: #FF7B42;
  }
}
`

export const StyledBodyIntroduceImageBelow = styled.img`
margin-left: 50px;
  position: relative;
  left: 0;
  top: 0;
`

export const StyledBodyIntroduceImageAbove = styled.img`
  position: relative;
  left: 193px;
  top:-265px;

`

export const StyledBodyIntroduceTitle = styled.div`
  p {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 550;
    font-size: 40px;
    line-height: 100%;
    /* or 40px */

    color: #1C1C1E;
  }
`

export const StyledBodyIntroduceContent = styled.div`
  display: flex;
  flex-direction: row;
  p{
  
    padding-left: 50px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    /* or 26px */

    color: #3D3E3F;
    }
`