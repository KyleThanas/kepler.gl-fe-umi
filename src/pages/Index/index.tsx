import React, { useRef } from 'react';
import { history as router } from 'umi';
// import KeplerGl from 'kepler.gl';
import store from '@/store';
import { Provider, connect } from 'react-redux';
import styles from './index.less';

// export interface IPropsMap {
//   id: string;
//   width: number;
//   height: number;
//   mapboxApiAccessToken: string;
// }

// const Map: React.FC<IPropsMap> = props => {
//   const { width, height, mapboxApiAccessToken: MAPBOX_TOKEN } = props;

//   return <KeplerGl
//     id="foo"
//     width={width}
//     mapboxApiAccessToken={MAPBOX_TOKEN}
//     height={height}
//   />;
// };

const IndexPage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();

  const handleGoCompany = () => {
    router.push({ pathname: `/company/${inputRef.current.value}`, query: { xnkey: 'index' } });
  }

  const handleGoDemo = () => {
    router.push({ pathname: `/demo/` });
  }

  console.log('store: ', store);
  return (
    <Provider store={store}>
      <h1 className={styles.title}>Page index</h1>
      <div>
        <input ref={inputRef} />
        <div onClick={handleGoCompany}>
          跳转公司页
        </div>
      </div>
      <div>
        <div onClick={handleGoDemo}>
          Demo
        </div>
      </div>
      {/* <Map id="map1" width={800} height={800} mapboxApiAccessToken={MAPBOX_TOKEN} /> */}
    </Provider>
  );
}

// const mapStateToProps = state => state;
// const dispatchToProps = dispatch => ({ dispatch });

// export default connect(mapStateToProps, dispatchToProps)(IndexPage);

export default IndexPage
