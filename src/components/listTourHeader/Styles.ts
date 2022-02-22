import styled from 'styled-components';

export const StyledListTourHeaderContainer = styled.div`
  width: 100%;
  position: relative;

  .listtour-search {
    position: absolute;
    width: 445px;
    height: 552px;
    left: 830px;
    top: 198px;

    background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.704) 1.52%,
    rgba(255, 255, 255, 0.64) 100%
  );

  }
`

export const StyledHeaderNoFeature = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 830px;
  height: 99px;
  left: 0px;
  top: 568px;
  z-index: 100;
  display: flex;
  flex-direction: column;
`