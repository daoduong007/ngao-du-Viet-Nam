import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';

import {
  StyledText,
  StyledSearchTourItems,
  StyledSearchTourItem,
  StyledSearchTitle,
  StyledSearchAction,
  SearchInput,
  SearchSelect,
  IconLocation,
  IconSearch,
  IconFlag,
  IconDepatureTime,
  IconGuest,
} from '@components';

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
        <StyledSearchTitle>
          <StyledText
            fontSize={'24px'}
            fontWeight={'normal'}
            color={'#1C1C1E'}
            lineHeight={'120%'}
          >
            Discover beautiful Vietnam
          </StyledText>
        </StyledSearchTitle>
        <StyledSearchTourItems>
          <StyledSearchTourItem>
            <div className='icon-search'>
              <IconLocation />
            </div>
            <SearchInput
              placeholder={'Quatlam Beach, Giaothuy, Namdinh'}
            />
          </StyledSearchTourItem>
          <StyledSearchTourItem>
            <div className='icon-search'>
              <IconDepatureTime />
            </div>

            <SearchInput placeholder={'Departure time'} />
          </StyledSearchTourItem>
          <StyledSearchTourItem>
            <div className='icon-search'>
              <IconFlag />
            </div>
            <SearchSelect defaultValue={'Type of tour'} />
          </StyledSearchTourItem>
          <StyledSearchTourItem>
            <div className='icon-search'>
              <IconGuest />
            </div>

            <SearchSelect defaultValue={'Number of guests'} />
          </StyledSearchTourItem>
        </StyledSearchTourItems>
        <StyledSearchAction>
          <button type='submit' className='submitSearch'>
            <div className='icon-search'>
              <IconSearch />
            </div>
            <StyledText>Search</StyledText>
          </button>
        </StyledSearchAction>
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
