import React from 'react';
import { withRouter, IRouteComponentProps } from 'umi';
import LoginRequired from './LoginRequired';

interface IProps {
  location: {
    query: { locale: string };
  };
}

const Root: React.FC<IRouteComponentProps & IProps> = props => {
  const { children } = props
  // location: { query: { locale = 'zh-CN' } }

  return (
    <LoginRequired>
      {children}
    </LoginRequired>
  );
};

export default withRouter(Root);
