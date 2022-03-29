import React, { useState } from 'react';
import { Button, Popover, Select, Pagination, Row, Col } from 'antd';
import { generatePath, useHistory } from 'react-router-dom';

import {
  StyleBodyListHotelContainer,
  ListHotelFilter,
  DataListHotel,
  DataListHotel2,
  HotelItem,
  IconPrevPage,
  IconNextPage,
  BreadcrumbLink,
} from '@components';
import { AppRoutes } from '@enums';

export const BodyListHotel = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
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

  return (
    <StyleBodyListHotelContainer>
      <BreadcrumbLink pathUrl={pathUrl} />
      <div className='list-hotel-body-tittle'>
        <h2>Hotels</h2>
        <div className='list-hotel-sort-and-filter'>
          <div className='list-hotel-body-sort'>
            <p>SORT BY: </p>

            <div className='sort-select'>
              <Select defaultValue='Price' bordered={false}>
                <Option value='Price'>Price</Option>
                <Option value='Rating'>Rating</Option>
                <Option value='Review'>Review</Option>
              </Select>
            </div>
          </div>
          <div className='list-hotel-body-filer'>
            <Popover
              placement='bottomLeft'
              content={ListHotelFilter}
              trigger='click'
              className='list-hotel-popup'
              style={{ padding: 0 }}
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
        {currentPage === 1 ? (
          <>
            {DataListHotel.map((item) => (
              <Col
                key={item.id}
                className='list-hotel-item'
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <HotelItem data={item} onClick={handleClick} />
              </Col>
            ))}
          </>
        ) : currentPage === 2 ? (
          <>
            {DataListHotel2.map((item) => (
              <Col
                key={item.id}
                className='list-hotel-item'
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <HotelItem data={item} onClick={handleClick} />
              </Col>
            ))}
          </>
        ) : null}
      </Row>
      <div className='list-hotel-body-pagination'>
        <Pagination
          total={15}
          current={currentPage}
          itemRender={itemRender}
          defaultCurrent={1}
          onChange={(page) => {
            handleChangePage(page);
          }}
        ></Pagination>
      </div>
    </StyleBodyListHotelContainer>
  );
};
