import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import { IconDot } from '@components';

interface IBreadUrl {
  pathUrl: string[];
}

export const BreadcrumbLink = (props: IBreadUrl) => {
  const { pathUrl } = props;
  return (
    <StyledBreadcrumb>
      <Breadcrumb
        separator={<IconDot width={4} height={4} color={'#C4C4C4'} />}
      >
        {pathUrl.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {item !== '' ? (
              <Link to={`/${item}`}>
                <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
              </Link>
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
    &:hover {
      cursor: pointer;
      color: #ff7b42;
    }
    margin: 0px;

    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */

    text-align: center;
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
