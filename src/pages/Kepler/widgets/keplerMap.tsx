import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap, wrapTo } from 'kepler.gl/actions';
import { theme } from 'kepler.gl/styles';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { ThemeProvider } from 'styled-components';
import { IKeplerProps } from '@/types/common'
import configHive from './data/hive-config';
import configGalaxy from './data/galaxy-config';
import sampleData from './data/sample-data';
import galaxyData from './data/galaxy-data.json';

const KeplerMapContainer: React.FC<IKeplerProps> = props => {
  const { dispatch } = props;


  useEffect(() => {
    // 处理config信息
    const { config: {
      config: showConfig
    } } = configGalaxy
    console.log('configHive: ', configHive);
    console.log('showConfig: ', showConfig);
    console.log('galaxyData: ', galaxyData);
    console.log('sampleData: ', sampleData);

    // 处理数据信息
    const jsonToData = {
      info: {},
      data: {
        fields: [],
        rows: [],
      }
    }
    jsonToData.info = galaxyData.info;
    jsonToData.data.fields = galaxyData.datasets[0].data.fields;
    jsonToData.data.rows = galaxyData.datasets[0].data.allData;

    dispatch(wrapTo(
      'KeplerGlMap',
      addDataToMap({
        // sampleData galaxyData
        datasets: jsonToData,
        // configGalaxy configGalaxy
        config: showConfig,
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
              id="KeplerGlMap"
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
