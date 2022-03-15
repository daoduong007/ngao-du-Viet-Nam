import React, { useEffect, useState } from 'react';

import {
  HotelDetailHeader,
  PrivacyPolicyBody,
  Footer,
} from '@components';

export const PrivacyPolicyScreen = () => {
  return (
    <>
      <HotelDetailHeader />
      <PrivacyPolicyBody />
      <Footer />
    </>
  );
};
