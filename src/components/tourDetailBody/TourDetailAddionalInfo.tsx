import React from 'react';
import { Collapse } from 'antd';

import { DataAdditionalInfo, IconQuestionMark } from '@components';

export const TourDetailAddionalInfo = () => {
  const { Panel } = Collapse;
  return (
    <>
      <div className='additional-items'>
        <ul>
          {DataAdditionalInfo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='additional-faq'>
        <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
          <Panel
            header='What is the maximum group size during 2 Days 1 Night To Zagora Desert From Marrakech?'
            key='1'
            extra={
              <div className='icon-quest-mark'>
                <IconQuestionMark />
              </div>
            }
          >
            <div>
              <p>
                This activity will have a maximum of 17 travelers.
              </p>
            </div>
          </Panel>
          <Panel
            header='When and where does the tour start?'
            key='2'
            extra={
              <div className='icon-quest-mark'>
                <IconQuestionMark />
              </div>
            }
          >
            <div>
              <p>Tour will start ...</p>
            </div>
          </Panel>
          <Panel
            header='Do you arrange airport transfers?'
            key='3'
            extra={
              <div className='icon-quest-mark'>
                <IconQuestionMark />
              </div>
            }
          >
            <div>
              <p>We will prepare a car to take you to the airport</p>
            </div>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};
