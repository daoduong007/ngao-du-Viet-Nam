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

export const BreadcrumbLink = (props: IBreadUrl) => {
  const { pathUrl, screenName } = props;
  return (
    <StyledBreadcrumb>
      <Breadcrumb
        separator={<IconDot width={4} height={4} color={'#C4C4C4'} />}
      >
        {pathUrl.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {item !== '' && item.search(/[1-9]/) === -1 ? (
              <Link to={`/${item}`}>
                <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
              </Link>
            ) : item.search(/[1-9]/) !== -1 ? (
              <p onClick={handleClick}>Detail {screenName}</p>
            ) : null}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </StyledBreadcrumb>
  );
};
const StyledBreadcrumb = styled.div`
  display: flex;
  flex-direction: row;

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
    /* or 22px */
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
`;
