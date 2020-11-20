import React, { useRef } from 'react';
import { history as router } from 'umi';
// import KeplerGl from 'kepler.gl';
import { connect } from 'react-redux';

import styles from './index.less';

const MAPBOX_TOKEN = 'pk.eyJ1IjoieGlhb25pdSIsImEiOiJjamsxNm9oczMwNzk4M3dsYmNsdjIxYm4xIn0.xaNqu5WkkTDwuBR2zk2M9Q'; // eslint-disable-line
const width = 800
const height = 800

export interface IPropsMap {
  id: string;
  width: number;
  height: number;
  mapboxApiAccessToken: string;
}

// const Map: React.FC<IPropsMap> = props => {
//   const { width, height } = props;

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

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <input ref={inputRef} />
      <div onClick={handleGoCompany}>
        跳转公司页
      </div>
      {/* <Map id="map1" width={width} height={height} mapboxApiAccessToken={MAPBOX_TOKEN} /> */}
    </div>
  );
}

export default IndexPage

// const mapStateToProps = (state: any) => state;
// const dispatchToProps = (dispatch: any) => ({ dispatch });

// export default connect(mapStateToProps, dispatchToProps)(IndexPage);
