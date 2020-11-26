import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import keplerGlReducer, { uiStateUpdaters } from 'kepler.gl/reducers';
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import appReducer from './app-reducer';

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState: {
    readOnly: false,
    mapControls: {
      ...uiStateUpdaters.DEFAULT_MAP_CONTROLS,
      visibleLayers: {
        show: true,
      },
      mapLegend: {
        show: true,
        active: true,
      },
      // 3D功能
      toggle3d: {
        show: false,
      },
      // 分屏功能
      splitMap: {
        show: false,
      },
    },
  },
  // mapId: 'keplerMap',
});

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,
  app: appReducer,
});

const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];

export default createStore(reducers, {}, compose(...enhancers));
