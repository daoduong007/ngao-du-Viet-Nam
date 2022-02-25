import React from 'react';
import { Pannellum } from 'pannellum-react';

export const TourDetailImage360 = () => {
  return (
    <>
      <Pannellum
        width='100%'
        image={'/assets/image360.jpg'}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
      >
        <Pannellum.Hotspot pitch={11} yaw={-167} />
        <Pannellum.Hotspot pitch={31} yaw={-107} />
      </Pannellum>
    </>
  );
};
