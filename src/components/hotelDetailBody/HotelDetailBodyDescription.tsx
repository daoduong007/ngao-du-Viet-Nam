import React from 'react';
import styled from 'styled-components';

import { DataHotelDetailOverview } from '@components';

export const HotelDetailBodyDescription = () => {
  return (
    <>
      <div>
        <p>
          <span>Overview</span>
        </p>
        {DataHotelDetailOverview.map((item, index) => (
          <p key={index}> {item}</p>
        ))}
      </div>
    </>
  );
};
