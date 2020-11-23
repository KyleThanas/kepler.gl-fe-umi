import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap, wrapTo } from 'kepler.gl/actions';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { IKeplerProps } from '@/types/common'
import sampleData from './data/sample-data';
import config from './configurations/config';

const KeplerMapContainer: React.FC<IKeplerProps> = props => {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(
      wrapTo(
        'map1',
        addDataToMap({
          datasets: sampleData,
          config
        })
      )
    );
  }, [])

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <AutoSizer>
        {({ height, width }) => (
          <KeplerGl mapboxApiAccessToken={MAPBOX_TOKEN} id="map1" width={width} height={height} />
        )}
      </AutoSizer>
    </div>

  );
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(KeplerMapContainer);
