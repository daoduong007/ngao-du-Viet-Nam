import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import {
  DataAdditionalInfo,
  DataAdditionalFaq,
  IconQuestionMark,
  IconDropDown,
} from '@components';

export const TourDetailAddionalInfo = () => {
  const { Panel } = Collapse;
  return (
    <StyledTourDetailAdditional>
      <hr />
      <div className='additional-items'>
        <ul>
          {DataAdditionalInfo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='descriptions-tour-itinerary'>
        {DataAdditionalFaq.map((item, index) => (
          <div key={index} className='descriptions-content-collapse'>
            <Collapse
              expandIconPosition='left'
              bordered={false}
              ghost={true}
              expandIcon={() => (
                <div className='icon-question-mark'>
                  <IconQuestionMark />
                </div>
              )}
            >
              <Panel
                showArrow={true}
                extra={<IconDropDown />}
                header={item.questions}
                key={index}
              >
                <div className='itinerary-collapse-item'>
                  <p>{item.answer}</p>
                </div>
              </Panel>
            </Collapse>
          </div>
        ))}
      </div>
    </StyledTourDetailAdditional>
  );
};

const StyledTourDetailAdditional = styled.div`
  hr {
    border: 0px;
    border-bottom: 0.5px solid #888888;
    margin: 0px;
  }

  .descriptions-tour-itinerary {
    .descriptions-content-collapse {
      margin-bottom: 19px;
    }
    .itinerary-collapse-item {
      p {
        font-size: 16px;
        line-height: 30px;

        color: rgba(30, 30, 30, 0.8);
      }
    }
    .ant-collapse-content > .ant-collapse-content-box {
      padding: 16px 45px;
    }
    .ant-collapse-item-active .ant-collapse-extra svg {
      transform: rotate(180deg);
      transition-duration: 0.3s;
    }
    .ant-collapse {
      border-radius: 8px;
      background: #f4f4f4;
    }
    .ant-collapse-item {
      border: 0px;
    }
    .ant-collapse-item > .ant-collapse-header {
      align-items: flex-start;

      padding: 12px 16px;
      background: #fff;
      border: 1px solid #c4c4c4;
      border-radius: 8px;

      .icon-question-mark {
        margin-top: 4px;
      }
      .ant-collapse-extra {
        svg {
          margin-left: 20px;
        }
      }
    }
    .ant-collapse-item-active > .ant-collapse-header {
      background: #f4f4f4;
      border: 0;
      border-radius: 8px;
    }
  }
  @media (max-width: 600px) {
    .additional-items {
      ul > li {
        font-size: 14px !important;
      }
    }
    .itinerary-collapse-item {
      p {
        font-size: 14px !important;
      }
    }
  }
`;
