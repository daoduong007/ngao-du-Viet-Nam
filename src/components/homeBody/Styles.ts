import styled from 'styled-components';

export const StyledBodyContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  padding:0 165px;

  @media (min-width: 2350px) {
    width: 1440px;
    margin: 0 auto;
    margin-top: 150px;
  }
  @media (max-width: 1200px) {
    padding: 0 50px;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;

  }
`

export const StyledBodyTourContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  .attractive-tour-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      width: 50%;

      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 100%;
      /* or 40px */
      /* tieu de */

      color: #1C1C1E;
      text-align: left;
    }
    .body-button {
      padding-right: 15px;
    }

  }
  .attractive-tour-list-item {
    position: relative;   
    display :flex;
    flex-direction: row;
  }
  .list-item-load-more,.list-item-prev {
    display: flex;
    align-items: center;
    margin-bottom: 14%;
    svg {
      margin-left: 20px;  
      :hover {
        cursor: pointer;
        transform:  scale(1.2) ;
      }
    }
  }
  .load-more-discover,.prev-discover {
    margin-bottom: 8%;
  }
  .list-item-prev {
    svg {
      transform: rotate(180deg);
      margin-left: -40px;
    }
    svg:hover {
      cursor: pointer;
        transform:  scale(1.2) rotate(180deg);
    }
  }

  @media (max-width: 1200px){
    margin-top: 100px;
    .list-item-load-more,.list-item-prev {
      margin-bottom: 21%;
    }
    .load-more-discover,.prev-discover {
    margin-bottom: 8%;
  }
    .attractive-tour-title {
      p {
        width: 70%;
        font-size: 35px;
      }
    }
  }
  @media (max-width: 768px){
    margin-top: 30px;
    .list-item-load-more,.list-item-prev {
     display: none;
    }
    .attractive-tour-title {
      p {
        width: 80%;
        font-size: 25px;
      }
    }
  }
`

export const StyledBodyTourListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
