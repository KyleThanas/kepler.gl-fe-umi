import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap, wrapTo } from 'kepler.gl/actions';
import { theme } from 'kepler.gl/styles';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { ThemeProvider } from 'styled-components';
import { IKeplerProps } from '@/types/common'
import configHive from './configurations/config-hive';
import configGalaxy from './configurations/config-galaxy';
import sampleData from './data/sample-data';
import keplerglData from './data/keplergl-data.json';

const KeplerMapContainer: React.FC<IKeplerProps> = props => {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(wrapTo(
      'map1',
      addDataToMap({
        // sampleData keplerglData
        datasets: sampleData,
        // configGalaxy configGalaxy
        config: configGalaxy,
        option: {
          centerMap: true,
          readOnly: false
        },
      })
    ));
  }, [])

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <ThemeProvider theme={theme}>
        <AutoSizer>
          {({ height, width }) => (
            <KeplerGl
              mapboxApiAccessToken={MAPBOX_TOKEN}
              id="map1"
              width={width}
              height={height}
            />
          )}
        </AutoSizer>
      </ThemeProvider>
    </div>

  );
}

// export default KeplerMapContainer

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(KeplerMapContainer);
