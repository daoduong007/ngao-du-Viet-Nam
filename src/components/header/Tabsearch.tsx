import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';

import {
  StyledText,
  StyledSearchTourItems,
  StyledSearchTourItem,
  StyledSearchTitle,
  StyledSearchAction,
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
      <TabPane tab='Tab 1' key='1'>
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
            <IconLocation />
            <StyledText
              fontSize={'14px'}
              fontWeight={'normal'}
              color={'#1C1C1E'}
            >
              Quatlam Beach, Giaothuy, Namdinh
            </StyledText>
          </StyledSearchTourItem>
          <StyledSearchTourItem>
            <IconDepatureTime />
            <StyledText
              fontSize={'14px'}
              fontWeight={'normal'}
              color={'#1C1C1E'}
            >
              Departure time
            </StyledText>
          </StyledSearchTourItem>
          <StyledSearchTourItem>
            <IconFlag />
            <StyledText
              fontSize={'14px'}
              fontWeight={'normal'}
              color={'#1C1C1E'}
            >
              Type of tour
            </StyledText>
          </StyledSearchTourItem>
          <StyledSearchTourItem>
            <IconGuest />
            <StyledText
              fontSize={'14px'}
              fontWeight={'normal'}
              color={'#1C1C1E'}
            >
              Number of guests
            </StyledText>
          </StyledSearchTourItem>
        </StyledSearchTourItems>
        <StyledSearchAction>
          <IconSearch />
          <StyledText>Search</StyledText>
        </StyledSearchAction>
      </TabPane>
      <TabPane tab='Tab 2' key='2'>
        <h4>Hotels</h4>
      </TabPane>
    </StyledTab>
  );
};

const StyledTab = styled(Tabs)``;
