import React, { useEffect, useState } from 'react';
import DocumentTitle from 'react-document-title';
import { Provider } from 'react-redux';
import { IGetInitialProps, setLocale } from 'umi';
import { ICompanyPageProps } from '@/types/common';
import { sleep } from '@/utils/sleep';
import store from './store/store';
import KeplerMap from './keplerMap';

interface IProps {
  data: {
    title: string;
  };
  getInitialProps: any;
}

const CompanyPage: React.FC<ICompanyPageProps & IProps> = props => {
  // 国际化
  // import { useIntl } from 'umi';
  // const intl = useIntl();
  // { intl.formatMessage({ id: 'WELCOME_TO_UMI_WORLD' }, { name: '旅行者' }) }

  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    const {
      match: {
        params: { companyId, },
      },
      location: {
        query: {
          locale = 'zh-CN'
        },
      },
      data: {
        title
      }
    } = props;
    setLocale(locale)
    setPageTitle(companyId + title)
  }, [])

  return (
    <DocumentTitle title={pageTitle}>
      <Provider store={store}>
        <>
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
