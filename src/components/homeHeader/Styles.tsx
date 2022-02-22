import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: -20;
`;
export const StyledBackgroundImage = styled.img`
  width: 100%;
  height: 766px;
  position: relative;
  z-index: -10;
`;

export const StyledAppbar = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;
`;
export const StyledHeaderAppbarBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 110px;
  background: rgba(67, 51, 53, 0.4);
`;

export const StyledLogo = styled.div<{
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  xmlns?: string;
}>`
  position: absolute;
  top: 20px;
  left: 165px;
`;

export const StyledDirectional = styled.div`
  position: fixed;
  top: 52px;
  right: 165px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25rem;
  height: 2rem;
`;

export const StyledSearch = styled.div`
  position: absolute;
  width: 445px;
  height: 568px;
  left: 830px;
  top: 198px;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.704) 1.52%,
    rgba(255, 255, 255, 0.64) 100%
  );

  display: flex;
  flex-direction: column;
`;

export const StyledSearchTabPane = styled.div`
  height: 552px;
`;

export const StyledSearchType = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
`;

export const StyledSearchTours = styled.div`
  background: #ff7b42;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledSearchHotels = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledSearchTitle = styled.div`
  width: 381px;
  height: 34px;
  margin: 34px 33px 19px 31px;
  display: flex;
  align-items: center;
  /* h4 {
    font-size:24px;
    font-weight:normal;
    color:#1C1C1E;
    line-height:'120%;
  } */
`;

export const StyledSearchTourItems = styled.div`
  backdrop-filter: none;
`;

export const StyledSearchTourItem = styled.div`
  width: 382px;
  height: 64px;
  margin: 0 33px 18px 30px;
  display: flex;
  align-items: center;

  background-color: #ffffff;
  .icon-search {
    margin: 0 23px 0 26px;
  }
`;

export const StyledSearchAction = styled.div`
  width: 381px;
  height: 64px;
  margin: 9px 33px 34px 30px;

  &:hover {
    cursor: pointer;
  }
  button {
    background-color: #ff7b42;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    p {
      margin: 0;
    }
  }
`;

export const StyledFeature = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 830px;
  height: 99px;
  left: 0px;
  top: 667px;
  z-index: 100;
  display: flex;
  flex-direction: column;

  .FeatureHeader {
    margin: 26px 0 0 65px;
    display: flex;
    flex-direction: row;

    svg {
      margin-right: 8px;
      margin-top: 4px;
    }
  }
  .FeatureBody {
    width: 70%;
    margin-left: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .FeatureBodyItem {
      display: flex;
      .FeatureBodyItemText {
        margin: 6px 0 0 4px;
      }
    }
  }
`;

export const StyledSlogan = styled.div`
  position: absolute;
  top: 244px;
  left: 165px;
  width: 445px;
  height: 233px;
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.p<{
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: string;
  color?: string;
  textAlign?: string;
}>`
  text-align: ${(props) =>
    props.textAlign ? props.textAlign : 'left'};

  font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : 'DM Sans'};
  font-style: ${(props) =>
    props.fontStyle ? props.fontStyle : 'normal'};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : 'bold'};

  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight : '160%'};

  color: ${(props) => (props.color ? props.color : '#fff2cf')};

  &:hover {
    color: #ff7b42;
    cursor: pointer;
  }
`;
