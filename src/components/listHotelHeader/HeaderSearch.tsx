import React from 'react';
import { Button } from 'antd';

import {
  StyledSearchTourItems,
  StyledSearchTourItem,
  StyledSearchTitle,
  SearchInput,
  SearchSelect,
  IconLocation,
  IconSearch,
  IconDepatureTime,
  IconGuest,
} from '@components';

export const HeaderSearch = () => {
  // function callback(key) {
  //   console.log(key);
  // }

  return (
    <>
      <StyledSearchTitle>
        <p>Find hotels for your next trip</p>
      </StyledSearchTitle>
      <StyledSearchTourItems>
        <StyledSearchTourItem>
          <div className='tab-search-icon'>
            <IconLocation />
          </div>
          <SearchInput
            placeholder={'Quatlam Beach, Giaothuy, Namdinh'}
          />
        </StyledSearchTourItem>
        <StyledSearchTourItem>
          <div className='tab-search-icon'>
            <IconDepatureTime />
          </div>

          <SearchInput placeholder={'Departure time'} />
        </StyledSearchTourItem>
        <StyledSearchTourItem>
          <div className='tab-search-icon'>
            <IconGuest />
          </div>

          <SearchSelect defaultValue={'Number of guests'} />
        </StyledSearchTourItem>
        <StyledSearchTourItem>
          <Button icon={<IconSearch />} type='primary'>
            Search
          </Button>
        </StyledSearchTourItem>
      </StyledSearchTourItems>
    </>
  );
};
