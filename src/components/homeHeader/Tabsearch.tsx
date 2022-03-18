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
        <TabSearchTours tabName='tab_tour' />
      </TabPane>
      <TabPane tab='Hotels' key='2'>
        <div className='tab-pane-hotels'>
          <h1>Hotels</h1>
        </div>
      </TabPane>
    </StyledTab>
  );
};

const StyledTab = styled(Tabs)`
  .tab-pane-hotels {
    width: 445px;
    height: 500.8px;
    padding: 32px 34px;

    text-align: left;
    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      /* or 29px */

      /* tieu de */

      color: #1c1c1e;
    }
  }
  .ant-tabs-tab {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    font-family: 'DM Sans';
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
    display: none;
  }
  .ant-tabs-ink-bar .ant-tabs-ink-bar-animated {
    width: 0px !important;
  }
`;
