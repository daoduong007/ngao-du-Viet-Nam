import React from 'react';
import { Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import { StyledBodySubscribeMail } from '@components';

export const BodySubscribeMail = () => {
  return (
    <StyledBodySubscribeMail>
      <div className='body-subscribe-mail-title'>
        <p>
          Leave us an email, <br />
          to get <span>the latest deals</span>
        </p>
      </div>
      <div className='body-input-mail'>
        <Input
          placeholder='example@gmail.com'
          prefix={<MailOutlined />}
        />
        <Button type='primary'>Send</Button>
      </div>
    </StyledBodySubscribeMail>
  );
};
