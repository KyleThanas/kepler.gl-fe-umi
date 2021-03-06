import window from 'global/window';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import keplerGlReducer, { uiStateUpdaters } from 'kepler.gl/reducers';
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import demoReducer from './app-reducer';

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
        active: false,
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
  app: demoReducer,
});

const middlewares = enhanceReduxMiddleware([]);

export const enhancers = [applyMiddleware(...middlewares)];

const initialState = {};

// add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, initialState, composeEnhancers(...enhancers));
