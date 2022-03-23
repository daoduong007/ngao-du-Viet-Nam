import React, { useState } from 'react';
import { Button, Popover, Row, Col, Pagination } from 'antd';
import { generatePath, useHistory } from 'react-router-dom';

import {
  ListTourItems,
  BodyTourItem,
  StyledListTourBodyContainer,
  ListTourFilter,
  IconPrevPage,
  IconNextPage,
  BreadcrumbLink,
  ListTourItems2,
} from '@components';
import { AppRoutes } from '@enums';

export const ListTourBody = ({}) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (id: number) => {
    history.push(
      generatePath(AppRoutes.TOUR_DETAIL, {
        id,
      }),
    );
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const pathUrl = ['Home'].concat(
    window.location.pathname.split('/'),
  );

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
    <StyledListTourBodyContainer>
      <BreadcrumbLink pathUrl={pathUrl} />

      <div className='listtour-body-tittle'>
        <p>Attractive tour and interesting experiences</p>
        <div className='listtour-body-filer'>
          <Popover
            placement='bottomLeft'
            content={ListTourFilter}
            trigger='click'
            className='list-tour-popup'
          >
            <Button type='primary'>Filter</Button>
          </Popover>
        </div>
      </div>
      <Row
        className='listtour-body-content'
        justify={'space-around'}
        gutter={[
          { xs: 0, sm: 20, md: 30, lg: 30 },
          { xs: 20, sm: 25, md: 45 },
        ]}
      >
        {currentPage === 1 ? (
          <>
            {ListTourItems.map((tour) => (
              <Col
                key={tour.id}
                className='list-tour-item'
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <BodyTourItem data={tour} onClick={handleClick} />
              </Col>
            ))}
          </>
        ) : currentPage === 2 ? (
          <>
            {ListTourItems2.map((tour) => (
              <Col
                key={tour.id}
                className='list-tour-item'
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <BodyTourItem data={tour} onClick={handleClick} />
              </Col>
            ))}
          </>
        ) : null}
      </Row>
      <div className='listtour-body-pagination'>
        <Pagination
          total={12}
          current={currentPage}
          itemRender={itemRender}
          defaultCurrent={1}
          onChange={(page) => {
            handleChangePage(page);
          }}
        ></Pagination>
      </div>
    </StyledListTourBodyContainer>
  );
};
