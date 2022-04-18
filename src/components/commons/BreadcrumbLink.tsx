import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import { IconDot } from '@components';

interface IBreadUrl {
  pathUrl: string[];
  screenName?: 'tours' | 'hotels';
}
const handleClick = () => {
  window.scrollTo(0, 0);
};

export const BreadcrumbLink = React.forwardRef<any, IBreadUrl>(
  (props: IBreadUrl, ref?: any) => {
    const { pathUrl, screenName } = props;
    return (
      <StyledBreadcrumb ref={ref}>
        <Breadcrumb
          separator={
            <IconDot width={4} height={4} color={'#C4C4C4'} />
          }
        >
          {pathUrl.map((item, index) => (
            <Breadcrumb.Item key={index}>
              {item === 'Home' ? (
                <Link to={`/`}>
                  <p>{item}</p>
                </Link>
              ) : item !== '' && item.search(/[1-9]/) === -1 ? (
                <Link to={`/${item}`}>
                  <p>
                    {(
                      item.charAt(0).toUpperCase() + item.slice(1)
                    ).replace('_', ' ')}
                  </p>
                </Link>
              ) : item.search(/[1-9]/) !== -1 ? (
                <p onClick={handleClick}>Detail {screenName}</p>
              ) : null}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </StyledBreadcrumb>
    );
  },
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

// export const BreadcrumbLink = React.forwardRef(BreadcrumbLinkRef);
const StyledBreadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: 'DM Sans';
  font-style: normal;
  p {
    margin: 0px;
    &:hover {
      cursor: pointer;
      color: #ff7b42;
    }
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;

    color: #3d3e3f;
  }

  .ant-breadcrumb,
  .ant-breadcrumb > span {
    display: flex;
    flex-direction: row;
  }
  .ant-breadcrumb-separator {
    margin: 0 24px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 12px;
    }
    .ant-breadcrumb-separator {
      margin: 0 12px;
    }
  }
`;
