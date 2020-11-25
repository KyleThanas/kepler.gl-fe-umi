import React, { useRef, useMemo } from 'react';
import DocumentTitle from 'react-document-title';
import { IGetInitialProps, useIntl, setLocale } from 'umi';
import Toast from '@/components/Toast';
import Line from '@/components/Line';
import ButtonBasic from '@/components/Botton/Basic';
import { sleep } from '@/utils/sleep';
import styles from './index.less';

interface IProps {
  data: {
    title: string;
  };
  getInitialProps: any;
}

const IndexPage: React.FC<IProps> = (props) => {
  const intl = useIntl();
  const inputRef = useRef<HTMLInputElement>();
  const pageTitle = useMemo(() => {
    const {
      data: {
        title
      }
    } = props
    return title;
  }, []);

  const handleGoCompany = () => {
    window.location.href = `/company/${inputRef.current.value}?xnkey=index`
    // router.push({ pathname: `/company/${inputRef.current.value}`, query: { xnkey: 'index' } });
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
    <DocumentTitle title="首页">
      <>
        <h1 className={styles.title}>{pageTitle}</h1>
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
        <div className={styles.buttonBox}>
          <ButtonBasic text="en" onClick={() => setLocale('en-US', false)} style={{ 'marginRight': 40 }} />
          <ButtonBasic text="zh" onClick={() => setLocale('zh-CN', false)} />
        </div>
        <Line />
        国际化：{intl.formatMessage({ id: 'siteTitle' })}
        <Line />
        模板国际化方案：
        {intl.formatMessage({ id: 'WELCOME_TO_UMI_WORLD' }, { name: '旅行者' })}
      </>
    </DocumentTitle>
  );
}


IndexPage.getInitialProps = (async () => {
  await sleep(100)
  return Promise.resolve({
    data: {
      title: '首页',
    }
  })
}) as IGetInitialProps;

export default IndexPage
