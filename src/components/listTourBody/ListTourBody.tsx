import React from 'react';
import { Button, Popover } from 'antd';
import { generatePath, useHistory } from 'react-router-dom';

import {
  ListTourItems,
  BodyTourItem,
  StyledListTourBodyContainer,
  IconDot,
  ListTourFilter,
  IconPrevPage,
  IconNextPage,
} from '@components';
import { AppRoutes } from '@enums';

export const ListTourBody = ({}) => {
  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(
      generatePath(AppRoutes.TOUR_DETAIL, {
        id,
      }),
    );
  };
  return (
    <StyledListTourBodyContainer>
      <div className='listtour-body-screenname'>
        <p>Home</p>
        <div>
          <IconDot width={4} height={4} color={'#C4C4C4'} />
        </div>
        <p>Tours</p>
      </div>
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
      <div className='listtour-body-content'>
        {ListTourItems.map((tour) => (
          <BodyTourItem
            key={tour.id}
            data={tour}
            onClick={handleClick}
          />
        ))}
      </div>

      <div className='listtour-body-pagination'>
        <p>Showing 1 / 2</p>
        <div className='listtour-body-pagination-button'>
          <Button type='primary'>
            <IconPrevPage />
          </Button>
          <Button type='primary' className='number-page'>
            1
          </Button>
          <Button type='primary' className='number-page'>
            2
          </Button>
          <Button type='primary' color={'#000000'}>
            <IconNextPage />
          </Button>
        </div>
      </div>
    </StyledListTourBodyContainer>
  );
};
