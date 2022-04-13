import React from 'react';
import styled from 'styled-components';

export const PageNotFound = () => {
  return (
    <StyledPageNotFound>
      <h1 className='number'>404</h1>
      <h2 className='text'>Page not found</h2>
    </StyledPageNotFound>
  );
};

const StyledPageNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'DM Sans';

  h1 {
    font-size: 5rem;
    font-weight: bold;

    color: #ff7b42;
  }
  h2 {
    font-size: 2rem;
    color: #ff7b42;
  }

  background-image: linear-gradient();
`;
