import styled from 'styled-components';

export const StyledBodyContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  padding:0 165px;

  @media (min-width: 1441px) {
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

  .swiper-button-next,
    .swiper-button-prev {
      width: 30px;
      height: 40px;
      background: rgba(255, 255, 255, 0.8);
      color: #000000;

      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 17px;
      font-weight: bold;
    }
    .swiper-button-prev {
      left: 0px;
      top: 30%;
    }
    .swiper-button-next {
      right: 0px;
      top: 30%;
    }

    .discover-fascinating {
      .swiper-button-prev {
      top: 35%;
    }
    .swiper-button-next {
      top: 35%;
    }
    }

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
    .swiper-button-prev,.swiper-button-next {
      top: 33%;
    }
    .discover-fascinating {
      .swiper-button-prev,.swiper-button-next {
      top: 40%;
      }
    }
  }
  @media (max-width: 767px){
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
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`

export const StyledBodyTourListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
