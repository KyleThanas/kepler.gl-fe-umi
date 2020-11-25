import window from 'global/window';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import keplerGlReducer, { uiStateUpdaters } from 'kepler.gl/reducers';
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import demoReducer from './app-reducer';

const customizedKeplerGlReducer = keplerGlReducer
  .initialState({
    uiState: {
      // hide side panel to disallower user customize the map
      readOnly: true,

      // customize which map control button to show
      mapControls: {
        ...uiStateUpdaters.DEFAULT_MAP_CONTROLS,
        visibleLayers: {
          show: false,
        },
        mapLegend: {
          show: true,
          active: true,
        },
        toggle3d: {
          show: false,
        },
        splitMap: {
          show: false,
        },
      },
    },
    mapId: 'keplerMap',
  })
  // handle additional actions
  .plugin({
    HIDE_AND_SHOW_SIDE_PANEL: state => ({
      ...state,
      uiState: {
        ...state.uiState,
        readOnly: !state.uiState.readOnly,
      },
    }),
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
