import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const StyledBackgroundImage = styled.img`
  width: 100%;
  height: 45rem;
  position: relative;
`;

export const StyledAppbar = styled.div``;

export const StyledDirectional = styled.div`
  position: absolute;
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
  height: 522px;
  left: 830px;
  top: 244px;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.704) 1.52%,
    rgba(255, 255, 255, 0.64) 100%
  );
  backdrop-filter: blur(42px);

  display: flex;
  flex-direction: column;
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
  svg {
    margin: 0 23px 23px 26px;
  }
`;

export const StyledSearchAction = styled.div`
  background-color: #ff7b42;

  width: 381px;
  height: 64px;
  margin: 9px 33px 34px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFeature = styled.div`
  position: absolute;
  width: 830px;
  height: 99px;
  left: 0px;
  display: flex;
  justify-content: space-around;
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
