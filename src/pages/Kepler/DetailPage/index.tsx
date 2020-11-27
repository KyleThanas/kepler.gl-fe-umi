import React, { useEffect, useState } from 'react';
import DocumentTitle from 'react-document-title';
import { Provider } from 'react-redux';
import { IGetInitialProps } from 'umi';
import { ICompanyPageProps } from '@/types/common';
// import { apiRequest as Axios } from '@/utils/axios';
// import Axios from 'axios';
import { sleep } from '@/utils/sleep';
import store from './store1/store';
import KeplerMapContainer from '../widgets/keplerMap';

interface IProps {
  data: {
    title: string;
  };
  getInitialProps: any;
}

const CompanyPage: React.FC<ICompanyPageProps & IProps> = props => {
  // 国际化
  // import { useIntl, setLocale } from 'umi';
  // const intl = useIntl();
  // { intl.formatMessage({ id: 'WELCOME_TO_UMI_WORLD' }, { name: '旅行者' }) }
  // setLocale(locale)
  // location: {
  //   query: {
  //     locale = 'zh-CN'
  //   },
  // },
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    const {
      match: {
        params: { companyId, },
      },
      data: {
        title
      }
    } = props;
    setPageTitle(companyId + title)
  }, [])


  // const getData = async (): Promise<void> => {
  //   const { data } = await Axios.post('/api/statistics/type', {
  //     begin: 1605456000000,
  //     companyId: "3c00a23f954439b39618aaf1b94a0ecc",
  //     end: 1605715200000,
  //     type: "rodeHeatMap",
  //   });
  //   console.log('data: ', data);
  // };

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <DocumentTitle title={pageTitle}>
      <Provider store={store}>
        <>
          <KeplerMapContainer />
        </>
      </Provider>
    </DocumentTitle>
  );
}

CompanyPage.getInitialProps = (async () => {
  await sleep(100)
  // const { data } = await Axios.post('https://kylethanas.github.io/kepler.gl-fe-umi/src/pages/Company/DetailPage/data/kepler-gl_new%20dataset--filter.csv');
  // console.log('data: ', data);

  return Promise.resolve({
    data: {
      title: '数据页',
    }
  })
}) as IGetInitialProps;

export default CompanyPage
