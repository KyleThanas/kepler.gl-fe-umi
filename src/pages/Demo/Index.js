import React, { PureComponent } from 'react';
import { connect, Provider } from 'react-redux';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import KeplerGl from 'kepler.gl';

import { createAction } from 'redux-actions';

import { addDataToMap, wrapTo } from 'kepler.gl/actions';
import store from '@/store';
import sampleData from './data/sample-data';
import config from './configurations/config';

// const MAPBOX_TOKEN = 'pk.eyJ1IjoieGlhb25pdSIsImEiOiJjamsxNm9oczMwNzk4M3dsYmNsdjIxYm4xIn0.xaNqu5WkkTDwuBR2zk2M9Q'; // eslint-disable-line

// extra actions plugged into kepler.gl reducer (store.js)
const hideAndShowSidePanel = createAction('HIDE_AND_SHOW_SIDE_PANEL');

class DemoPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('props: ', props);
    console.log('store: ', store);
  }

  componentDidMount() {
    this.props.dispatch(
      wrapTo(
        'map1',
        addDataToMap({
          datasets: sampleData,
          config,
        }),
      ),
    );
  }

  toggleSidePanelVisibility = () => {
    this.props.dispatch(wrapTo('map1', hideAndShowSidePanel()));
  };

  render() {
    return (
      <Provider store={store}>
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <button type="submit" onClick={this.toggleSidePanelVisibility}>
            Hide / Show Side Panel
          </button>
          <AutoSizer>{({ height, width }) => <KeplerGl mapboxApiAccessToken={MAPBOX_TOKEN} id="map1" width={width} height={height} />}</AutoSizer>
        </div>
      </Provider>
    );
  }
}

// export default DemoPage;

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(DemoPage);
