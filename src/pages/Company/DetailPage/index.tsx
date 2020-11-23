import React, { useEffect, useState } from 'react';
import DocumentTitle from 'react-document-title';
import { Provider } from 'react-redux';
import { ICompanyPageProps } from '@/types/common';
import store from '@/store';
import KeplerMap from './keplerMap';

const CompanyPage: React.FC<ICompanyPageProps> = props => {
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    const {
      match: {
        params: { companyId },
      },
    } = props;
    setPageTitle(companyId)
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

export default CompanyPage
