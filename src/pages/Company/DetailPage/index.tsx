import React, { useEffect, useState } from 'react';
import DocumentTitle from 'react-document-title';
import { Provider } from 'react-redux';
import { IGetInitialProps, useIntl, setLocale } from 'umi';
import { ICompanyPageProps } from '@/types/common';
import { sleep } from '@/utils/sleep';
import store from '@/store';
import KeplerMap from './keplerMap';

interface IProps {
  data: {
    title: string;
  };
  getInitialProps: any;
}

const CompanyPage: React.FC<ICompanyPageProps & IProps> = props => {
  const intl = useIntl();
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    const {
      match: {
        params: { companyId },
      },
      data: {
        title
      }
    } = props;
    setPageTitle(companyId + title)
  }, [])

  return (
    <DocumentTitle title={pageTitle}>
      <Provider store={store}>
        <>
          {intl.formatMessage({ id: 'WELCOME_TO_UMI_WORLD', }, { name: '旅行者', })}
          <KeplerMap />
        </>
      </Provider>
    </DocumentTitle>

  );
}

CompanyPage.getInitialProps = (async () => {
  await sleep(100)
  return Promise.resolve({
    data: {
      title: '数据页',
    }
  })
}) as IGetInitialProps;

export default CompanyPage
