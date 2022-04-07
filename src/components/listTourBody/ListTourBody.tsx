import React, { useEffect, useState } from 'react';
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
} from '@components';
import { AppRoutes } from '@enums';
import { tourApi } from '@api';
import { FilterTour } from '@utils';

export const ListTourBody = ({}) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isVisiblePopUp, setIsVisiblePopUp] =
    useState<boolean>(false);
  const [listTourData, setListTourData] = useState<any>([]);
  const [listTourFilltered, setListTourFilltered] = useState<any>([]);

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

  useEffect(() => {
    const fetchTourList = async () => {
      try {
        const params = {
          _page: currentPage,
          _limit: 12,
        };
        const response = await tourApi.getAll(params);
        setListTourData(response);
      } catch (error) {
        console.error('fail to fetch tour list', error);
      }
    };

    fetchTourList();
  }, [currentPage]);

  useEffect(() => {
    if (listTourFilltered.length !== 0) {
      setListTourData(listTourFilltered);
    } else {
      const fetchTourList = async () => {
        try {
          const params = {
            _page: 1,
            _limit: 12,
          };
          const response = await tourApi.getAll(params);
          setListTourData(response);
        } catch (error) {
          console.error('fail to fetch tour list', error);
        }
      };

      fetchTourList();
    }
  }, [listTourFilltered]);

  const handleApplyFilter = (
    budgetFilter: any,
    durationFilter: any,
    typeOfTourFilter: string[],
  ) => {
    setIsVisiblePopUp((isVisiblePopUp) => !isVisiblePopUp);

    setListTourFilltered(
      FilterTour(
        ListTourItems,
        budgetFilter,
        durationFilter,
        typeOfTourFilter,
      ),
    );
  };

  const handleVisibleChange = () => {
    setIsVisiblePopUp((isVisiblePopUp) => !isVisiblePopUp);
  };
  return (
    <StyledListTourBodyContainer>
      <BreadcrumbLink pathUrl={pathUrl} />

      <div className='listtour-body-tittle'>
        <p>Attractive tour and interesting experiences</p>
        <div className='listtour-body-filer'>
          <Popover
            placement='bottomLeft'
            content={
              <ListTourFilter
                onClick={handleApplyFilter}
                isVisiblePopUp={isVisiblePopUp}
              />
            }
            trigger='click'
            className='list-tour-popup'
            visible={isVisiblePopUp}
            onVisibleChange={handleVisibleChange}
          >
            <Button type='primary'>Filter</Button>
          </Popover>
        </div>
      </div>
      <Row
        className='listtour-body-content'
        gutter={[
          { xs: 0, sm: 20, md: 30, lg: 30 },
          { xs: 20, sm: 25, md: 45 },
        ]}
      >
        {listTourData.length !== 0 ? (
          <>
            {listTourData.map((tour) => (
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
        ) : (
          <h2>No data matching</h2>
        )}
      </Row>
      <div className='listtour-body-pagination'>
        {listTourFilltered.length === 0 &&
        listTourData.length !== 0 ? (
          <Pagination
            total={24}
            pageSize={12}
            current={currentPage}
            itemRender={itemRender}
            defaultCurrent={1}
            onChange={(page) => {
              handleChangePage(page);
            }}
          ></Pagination>
        ) : null}
      </div>
    </StyledListTourBodyContainer>
  );
};
