import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';

import { TabSearchTours } from '@components';

const { TabPane } = Tabs;

export const Tabsearch = () => {
  // function callback(key) {
  //   console.log(key);
  // }

  return (
    <StyledTab
      className='tabSearch'
      defaultActiveKey='1'
      //onChange={callback}
    >
      <TabPane tab='Tours' key='1'>
        <TabSearchTours />
      </TabPane>
      <TabPane tab='Hotels' key='2'>
        <h4>Hotels</h4>
      </TabPane>
    </StyledTab>
  );
};

const StyledTab = styled(Tabs)`
  .ant-tabs-tab {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */

    text-align: center;
  }
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #ff7b42;
    text-shadow: 0 0 0.25px currentcolor;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff;
    text-shadow: 0 0 0.25px currentcolor;
  }
  .ant-tabs-tab:hover {
    color: #ffffff;
  }
  .ant-tabs-ink-bar {
    background-color: #ffffff;
  }
  .ant-tabs-ink-bar .ant-tabs-ink-bar-animated {
    width: 0px !important;
  }
`;
