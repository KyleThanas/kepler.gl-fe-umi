import React, { useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { Provider, connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { createAction } from 'redux-actions';
import { addDataToMap, wrapTo } from 'kepler.gl/actions';
import { ICompanyPageProps } from '@/types/common';
import store from '@/store';
import sampleData from './data/sample-data';
import config from './configurations/config';

console.log('store: ', store);


const hideAndShowSidePanel = createAction('HIDE_AND_SHOW_SIDE_PANEL');

const CompanyPage: React.FC<ICompanyPageProps> = props => {
  const {
    match: {
      params: { companyId },
    },
  } = props;

  // useEffect(() => {
  //   this.props.dispatch(
  //     wrapTo(
  //       'map1',
  //       addDataToMap({
  //         datasets: sampleData,
  //         config
  //       })
  //     )
  //   );
  // }, [])

  return (
    <DocumentTitle title={companyId}>
      <Provider store={store}>
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <AutoSizer>
            {({ height, width }) => (
              <KeplerGl mapboxApiAccessToken={MAPBOX_TOKEN} id="map1" width={width} height={height} />
            )}
          </AutoSizer>
        </div>
      </Provider>
    </DocumentTitle>

  );
}

export default CompanyPage


// const mapStateToProps = state => state;
// const dispatchToProps = dispatch => ({ dispatch });

// console.log('connect: ', connect);
// export default connect(mapStateToProps, dispatchToProps)(CompanyPage);
