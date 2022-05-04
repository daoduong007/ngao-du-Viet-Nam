import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, DatePicker, Input, Select, Popover } from 'antd';
import axios from 'axios';
import { generatePath, useHistory } from 'react-router-dom';

import {
  IconLocation,
  IconSearch,
  IconFlag,
  IconDepatureTime,
  IconGuest,
} from '@components';

import { AppRoutes } from '@enums';

const typesOfTours = [
  'Cultural tourism',
  'Green tourism',
  'MICE tourism',
];

interface ITabSearchName {
  tabName: string;
}
export const TabSearchTours = (props: ITabSearchName) => {
  const history = useHistory();
  const { tabName } = props;
  const { Option } = Select;
  const [searchResults, setSearchResults] = useState<any>([]);

  const [location, setLocation] = useState<string>('');
  const [depatureTime, setDepatureTime] = useState<any>();
  const [typeTour, setTypeTour] = useState<string>();
  const [numberGuest, setNumberGuest] = useState<string>();

  const typeingTimeoutRef = React.useRef<any>(null);

  const handleChangeTypeTour = (value) => {
    setTypeTour(value);
  };

  const handleChangeNumberGuest = (value) => {
    setNumberGuest(value);
  };

  const handleChangeDeperatureTime = (value) => {
    setDepatureTime(value);
  };

  const handleSearch = () => {
    setTypeTour('');
    setNumberGuest('');
    setLocation('');
    setDepatureTime('');
  };

  const handleClickResult = (id) => {
    if (tabName === 'tab_hotel') {
      history.push(
        generatePath(AppRoutes.HOTEL_DETAIL, {
          id,
        }),
      );
    } else {
      history.push(
        generatePath(AppRoutes.TOUR_DETAIL, {
          id,
        }),
      );
    }
  };

  const handleSubmit = async (searchTerm) => {
    //call api here
    const fetchData = async () => {
      if (tabName === 'tab_hotel') {
        try {
          const response = await axios.get(
            `https://json-host-duongdev.herokuapp.com/hotels?q=${searchTerm}`,
          );

          setSearchResults(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await axios.get(
            `https://json-host-duongdev.herokuapp.com/tours?q=${searchTerm}`,
          );

          setSearchResults(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  };
  //custom debounce
  const DebounceJS = (e) => {
    const searchTerm = e.target.value;
    setLocation(searchTerm);
    if (typeingTimeoutRef.current) {
      clearTimeout(typeingTimeoutRef.current);
    }
    typeingTimeoutRef.current = setTimeout(() => {
      handleSubmit(searchTerm);
    }, 400);
  };

  //custom throttle
  // const throttle2 = (func, delay) => {
  //   let lastTime = 0;

  //   let countClick = 0;
  //   return () => {
  //     const now = Date.now();
  //     countClick++;
  //     if (now - lastTime < delay) return;

  //     func();
  //     console.log(`count click: ${countClick}`);
  //     lastTime = now;
  //   };
  // };
  //tối ưu throttle
  // function throttle(callback, limit) {
  //   let waiting = false;

  //   let countClick = 0;
  //   return () => {
  //     countClick++;
  //     if (!waiting) {
  //       callback();
  //       waiting = true;
  //       console.log(`count click: ${countClick}`);
  //       setTimeout(function () {
  //         waiting = false;
  //       }, limit);
  //     }
  //   };
  // }

  // const log = () => {
  //   console.log('throttle call');
  // };

  return (
    <StyledSearchTabPane>
      {/* <Button onClick={throttle(log, 1000)} type='primary'>
        test
      </Button> */}
      <div className='title'>
        {tabName === 'tab_tour' ? (
          <h1>Discover beautiful Vietnam</h1>
        ) : (
          <h1>Find hotels for your next trip</h1>
        )}
      </div>
      <div className='tab-search-list-item'>
        <div className='tab-search-item'>
          <div className='tab-search-icon'>
            <IconLocation />
          </div>

          <Popover
            content={
              <div className='results-search-content'>
                {searchResults.map((result, index) => (
                  <h4
                    key={index}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClickResult(result.id)}
                  >
                    {'<'}
                    {'> '} {result.location} :{' '}
                    {result.title || result.name} {' <'}
                    {'>'}
                  </h4>
                ))}
              </div>
            }
            trigger='click'
            placement='bottom'
            overlayInnerStyle={{
              width: '310px',
              height: '248px',
              overflowY: 'auto',
              marginLeft: '-60px',
            }}
            overlayStyle={{
              padding: '0px',
              fontFamily: 'DM Sans',
              fontSize: '0.95rem',
            }}
          >
            <Input
              value={location}
              onChange={(e) => {
                DebounceJS(e);
              }}
              onFocus={() => handleSubmit('')}
              placeholder={'Quatlam Beach, Giaothuy, Namdinh'}
            />
          </Popover>
        </div>
        <div className='tab-search-item'>
          <div className='tab-search-icon'>
            <IconDepatureTime />
          </div>

          <DatePicker
            value={depatureTime}
            onChange={(value) => handleChangeDeperatureTime(value)}
            placeholder={'Departure time'}
            suffixIcon={null}
            bordered={false}
          />
        </div>
        {tabName === 'tab_tour' ? (
          <div className='tab-search-item'>
            <div className='tab-search-icon'>
              <IconFlag />
            </div>
            <div className='select-type-tour'>
              <Select
                value={typeTour}
                defaultValue='Type of tour'
                onChange={handleChangeTypeTour}
              >
                {typesOfTours.map((item, index) => (
                  <Option value={item} key={index}>
                    {item}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        ) : null}

        <div className='tab-search-item'>
          <div className='tab-search-icon'>
            <IconGuest />
          </div>
          <div className='select-number-guest'>
            <Select
              value={numberGuest}
              defaultValue='Number of guests'
              onChange={handleChangeNumberGuest}
            >
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Option value={item} key={index}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className='tab-search-action'>
        <Button
          className='submit-search'
          icon={<IconSearch />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </StyledSearchTabPane>
  );
};
const StyledSearchTabPane = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  padding: 34px 32px;
  width: 452px;

  .title {
    width: 100%;
    text-align: left;
    h1 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 120%;

      color: #1c1c1e;
    }
  }
  .tab-search-action {
    width: 100%;
    height: 64px;

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
      span {
        margin-left: 16px;
        font-weight: 700;
        font-size: 0.88rem;
        line-height: 160%;
        /* or 22px */

        color: #ffffff;
      }
    }
    .ant-btn:hover,
    .ant-btn:focus,
    .ant-btn:active {
      color: #ff7b42;
    }
  }
  .tab-search-list-item {
    width: 100%;
  }
  .tab-search-item {
    width: 100%;
    height: 64px;

    margin-bottom: 18px;
    display: flex;
    align-items: center;

    background-color: #ffffff;

    .tab-search-icon {
      padding: 0 23px 0 26px;
    }
    .ant-input:focus,
    textarea:focus {
      box-shadow: none !important;
    }
    .ant-input {
      font-weight: 400;
      font-size: 0.88rem;
      line-height: 160%;

      color: #1c1c1e;

      border: 0;
    }

    .ant-picker-range .ant-picker-active-bar {
      background-color: #ff7b42;
    }
    .ant-picker {
      width: 78.5%;
    }
  }
  .select-type-tour,
  .select-number-guest {
    width: 100%;
    display: flex;
    align-items: left;
    .ant-select {
      width: 95%;
      padding-right: 26px;
    }
    .ant-select-single
      .ant-select-selector
      .ant-select-selection-item {
      text-align: left;
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector {
      border: 0;
    }
    .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
      box-shadow: none !important;
    }
    //remove box-shadow
    .ant-select-focused .ant-select-selector,
    .ant-select-selector:focus,
    .ant-select-selector:active,
    .ant-select-open .ant-select-selector {
      box-shadow: none !important;
    }
  }
  @media (min-width: 2540px) {
    width: 100%;
    padding: 40px 40px;
    .tab-search-item {
      height: 100px;
      svg {
        width: 2rem;
        height: 2rem;
      }
      .ant-input {
        font-size: 1.5rem;
      }
      .ant-picker-input > input {
        font-size: 1.5rem;
      }
      .ant-select-selection-item {
        font-size: 1.5rem;
      }
    }
    .title {
      h1 {
        font-size: 2rem;
      }
    }
    .tab-search-action {
      height: 100px;
      button > span {
        font-size: 1.8rem;
      }
      button > svg {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
  @media (min-width: 3280px) {
    padding: 50px 50px;
    .tab-search-item {
      height: 130px;
      .ant-input {
        font-size: 2rem;
      }
      .ant-picker-input > input {
        font-size: 2rem;
      }
      .ant-select-selection-item {
        font-size: 2rem;
      }
    }
    .title {
      h1 {
        font-size: 2.5rem;
      }
    }
    .tab-search-action {
      height: 130px;
    }
  }

  @media (max-width: 1200px) {
    width: 350px;
    padding: 25px 25px;
    .tab-search-item {
      height: 40px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    .title {
      h1 {
        font-size: 20px;
      }
    }
  }
`;
