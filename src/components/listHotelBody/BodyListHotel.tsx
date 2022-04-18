import React, { useEffect, useRef, useState } from 'react';
import { Button, Popover, Select, Pagination, Row, Col } from 'antd';
import { generatePath, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getHotels } from '@redux';
import {
  StyleBodyListHotelContainer,
  ListHotelFilter,
  DataListHotel,
  HotelItem,
  IconPrevPage,
  IconNextPage,
  BreadcrumbLink,
  Loading,
} from '@components';
import { AppRoutes } from '@enums';
import { FilterHotel, Sort } from '@utils';
import { hotelApi } from '@api';

export const BodyListHotel = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isVisiblePopUp, setIsVisiblePopUp] =
    useState<boolean>(false);
  const [optionSort, setOptionSort] = useState<string>('price');
  const [listHotelSorted, setListHotelSorted] = useState<any>([]);
  const [listHotelData, setListHotelData] = useState<any>([]);

  const contentRef = useRef<any>(null);
  const bodyRef = useRef<any>(null);

  const { Option } = Select;
  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(
      generatePath(AppRoutes.HOTEL_DETAIL, {
        id,
      }),
    );
  };

  const pathUrl = ['Home'].concat(
    window.location.pathname.split('/'),
  );

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    contentRef.current.scrollIntoView();
  };

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <Button icon={<IconPrevPage />}></Button>;
    }
    if (type === 'next') {
      return <Button icon={<IconNextPage />}></Button>;
    }
    return originalElement;
  };

  const handleApplyFilter = (
    budgetFilter: any,
    hotelStarFilter: number[],
    reviewScoreFilter: number[],
  ) => {
    setIsVisiblePopUp((isVisiblePopUp) => !isVisiblePopUp);

    setListHotelSorted(
      FilterHotel(
        entities[0],
        budgetFilter,
        hotelStarFilter,
        reviewScoreFilter,
      ),
    );
    setListHotelData([]);
  };

  const handleVisibleChange = () => {
    setIsVisiblePopUp((isVisiblePopUp) => !isVisiblePopUp);
  };

  function handleSort(option) {
    setOptionSort(option);
    setListHotelData([]);
    setListHotelSorted(Sort(DataListHotel, option, 'decrease'));
  }

  useEffect(() => {
    const fetchHotelList = async () => {
      try {
        const params = {
          _page: currentPage,
          _limit: 12,
        };
        const response = await hotelApi.getAll(params);
        setListHotelData(response);
      } catch (error) {
        console.error('fail to fetch hotel list', error);
      }
    };

    fetchHotelList();
  }, [currentPage]);

  useEffect(() => {
    bodyRef.current.scrollIntoView();
  }, []);

  const dispatch = useDispatch();

  const { entities, loadingHotel } = useSelector(
    (state: any) => state.hotel,
  );

  useEffect(() => {
    dispatch(getHotels());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyleBodyListHotelContainer ref={bodyRef}>
      <BreadcrumbLink pathUrl={pathUrl} />
      <div className='list-hotel-body-tittle' ref={contentRef}>
        <h2>Hotels</h2>
        <div className='list-hotel-sort-and-filter'>
          <div className='list-hotel-body-sort'>
            <p>SORT BY: </p>
            <div className='sort-select'>
              <Select
                defaultValue={optionSort}
                bordered={false}
                value={optionSort}
                onSelect={(option) => handleSort(option)}
              >
                <Option value='price'>Price</Option>
                <Option value='rating'>Rating</Option>
                <Option value='review'>Review</Option>
              </Select>
            </div>
          </div>
          <div className='list-hotel-body-filer'>
            <Popover
              placement='bottomLeft'
              content={
                <ListHotelFilter
                  onClick={handleApplyFilter}
                  isVisiblePopUp={isVisiblePopUp}
                />
              }
              trigger='click'
              className='list-hotel-popup'
              visible={isVisiblePopUp}
              onVisibleChange={handleVisibleChange}
            >
              <Button type='primary'>Filter</Button>
            </Popover>
          </div>
        </div>
      </div>
      <Row
        className='list-hotel-body-content'
        gutter={[
          { xs: 0, sm: 20, md: 30, lg: 30 },
          { xs: 20, sm: 25, md: 45 },
        ]}
      >
        {loadingHotel ? (
          <Loading />
        ) : (
          <>
            {listHotelData.length !== 0 ? (
              <>
                {listHotelData.map((hotel) => (
                  <Col
                    key={hotel.id}
                    className='list-hotel-item'
                    xs={{ span: 24 }}
                    sm={{ span: 12 }}
                    lg={{ span: 8 }}
                  >
                    <HotelItem data={hotel} onClick={handleClick} />
                  </Col>
                ))}
              </>
            ) : listHotelSorted.length !== 0 ? (
              <>
                {listHotelSorted.map((hotel) => (
                  <Col
                    key={hotel.id}
                    className='list-hotel-item'
                    xs={{ span: 24 }}
                    sm={{ span: 12 }}
                    lg={{ span: 8 }}
                  >
                    <HotelItem data={hotel} onClick={handleClick} />
                  </Col>
                ))}
              </>
            ) : (
              <div className='content-no-data'>
                <h1>No data matching</h1>
              </div>
            )}
          </>
        )}
      </Row>
      <div className='list-hotel-body-pagination'>
        {listHotelData.length !== 0 ? (
          <Pagination
            total={20}
            current={currentPage}
            itemRender={itemRender}
            defaultCurrent={1}
            onChange={(page) => {
              handleChangePage(page);
            }}
          ></Pagination>
        ) : null}
      </div>
    </StyleBodyListHotelContainer>
  );
};
