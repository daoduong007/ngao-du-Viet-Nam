import styled from 'styled-components'

export const StyledHotelHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;

  .header-app-bar {
    width: 100%;
    padding: 0 165px;
    margin-top: 20px;
    margin-bottom: 29px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      color:#1C1C1E;
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
  .hotel-header-hr {
      margin: 0;
      width: 100%;
      border: 0;
      border-bottom: 1px solid #C5C7C9;
  }
`