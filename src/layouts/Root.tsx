import React from 'react';
import { withRouter } from 'umi';
import LoginRequired from './LoginRequired';

const Root: React.FC = ({ children }) => {
  return (
    <LoginRequired>
      {children}
    </LoginRequired>
  );
};

export default withRouter(Root);
