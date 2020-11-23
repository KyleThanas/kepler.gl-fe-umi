import React, { useRef } from 'react';
import DocumentTitle from 'react-document-title';
import { history as router } from 'umi';
import Toast from '@/components/Toast';
import Line from '@/components/Line';
import ButtonBasic from '@/components/Botton/Basic';
import styles from './index.less';


const IndexPage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();

  const handleGoCompany = () => {
    router.push({ pathname: `/company/${inputRef.current.value}`, query: { xnkey: 'index' } });
  }

  const handleToast = () => {
    Toast.show()
  }

  const handleLoading = () => {
    Toast.loading()
    setTimeout(() => {
      Toast.hide()
    }, 2000)
  }

  return (
    <DocumentTitle title='首页'>
      <>
        <h1 className={styles.title}>Page index</h1>
        <div>
          <input ref={inputRef} />
          <ButtonBasic text="跳转公司页" onClick={handleGoCompany} />
        </div>
        <Line />
        <div className={styles.buttonBox}>
          <ButtonBasic text="Toast" onClick={handleToast} style={{ 'marginRight': 40 }} />
          <ButtonBasic text="Loading" onClick={handleLoading} />
        </div>
        <Line />
      </>
    </DocumentTitle>
  );
}

export default IndexPage
