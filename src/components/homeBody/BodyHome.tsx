import React, { useEffect, useState } from 'react';

import {
  StyledBodyContainer,
  BodyIntroduce,
  BodyAttractiveTour,
  BodyExperienceCultural,
  BodyDiscoverDestinations,
  BodySubscribeMail,
} from '@components';
import { homeApi } from '@api';

export const BodyHome = () => {
  const [dataDiscover, setDataDiscover] = useState<any>([]);
  const [dataExperience, setDataExperience] = useState<any>([]);
  const [dataAttractive, setDataAttractive] = useState<any>([]);

  useEffect(() => {
    const fetHomeData = async () => {
      try {
        const responseDiscover = await homeApi.getDiscover();
        setDataDiscover(responseDiscover);

        const responseAttractive = await homeApi.getActractive();
        setDataAttractive(responseAttractive);

        const responseExperience = await homeApi.getExperience();
        setDataExperience(responseExperience);
      } catch (error) {
        console.error('fail to fetch home data', error);
      }
    };

    fetHomeData();
  }, []);
  return (
    <StyledBodyContainer>
      <BodyIntroduce />
      <BodyDiscoverDestinations data={dataDiscover} />
      <BodyAttractiveTour data={dataAttractive} />
      <BodyExperienceCultural data={dataExperience} />
      <BodySubscribeMail />
    </StyledBodyContainer>
  );
};
