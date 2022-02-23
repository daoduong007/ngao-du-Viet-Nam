import React from 'react';
import { Button, Popover } from 'antd';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  ListTourItems,
  BodyTourItem,
  StyledListTourBodyContainer,
  IconDot,
  ListTourFilter,
  IconPrevPage,
  IconNextPage,
} from '@components';

export const ListTourBody = ({}) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/Tours/TourDetail`);
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
          <div key={tour.id} onClick={handleClick}>
            <BodyTourItem
              imgUrl={tour.imgUrl}
              location={tour.location}
              title={tour.title}
              timeDepature={tour.timeDepature}
              price={tour.price}
            />
          </div>
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
