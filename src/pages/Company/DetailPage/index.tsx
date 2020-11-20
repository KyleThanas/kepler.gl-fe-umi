import React from 'react';
import DocumentTitle from 'react-document-title';
import { ICompanyPageProps } from '@/types/common'
import styles from './index.less';


const CompanyPage: React.FC<ICompanyPageProps> = props => {
  const {
    match: {
      params: { companyId },
    },
    location: {
      query: { xnkey }
    },
  } = props;


  console.log('xnkey: ', xnkey);
  console.log('companyId: ', companyId);
  return (
    <DocumentTitle title={companyId}>
      <>
        <h1 className={styles.title}>CompanyPage index</h1>
        sadsadsa
      </>
    </DocumentTitle>

  );
}

export default CompanyPage
