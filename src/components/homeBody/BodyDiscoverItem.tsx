import React from 'react';
import styled from 'styled-components';

interface IItemProps {
  imgUrl: string;
  location: string;
  experiences?: string;
  onClick: () => void;
}

export const BodyDiscoverItem = (props: IItemProps) => {
  const { imgUrl, location, experiences, onClick } = props;
  return (
    <StyledBodyDiscoverItem onClick={onClick}>
      <div className='item-image'>
        <img src={imgUrl} />
      </div>
      <div className='item-location'>
        <p>{location}</p>
      </div>

      <div className='item-infomation'>
        <p>{experiences}</p>
      </div>
    </StyledBodyDiscoverItem>
  );
};
const StyledBodyDiscoverItem = styled.div`
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  width: 255px;
  display: flex;
  flex-direction: column;
  text-align: left;

  .item-image {
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
  }

  .item-location {
    height: 32px;
    margin-top: 12px;
    margin-bottom: 0px;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;

      color: #1c1c1e;
    }
  }

  .item-infomation {
    margin-top: 2px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;

      color: #636567;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;
