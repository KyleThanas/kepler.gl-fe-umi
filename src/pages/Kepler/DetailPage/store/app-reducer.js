import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import keplerGlReducer from 'kepler.gl/reducers';

// CONSTANTS
export const INIT = 'INIT';

// INITIAL_APP_STATE
const initialAppState = {
  appName: 'example',
  loaded: false,
};

// App reducer
export const appReducer = handleActions(
  {
    [INIT]: state => ({
      ...state,
      loaded: true,
    }),
  },
  initialAppState,
);

// export demoReducer to be combined in website app
export default combineReducers({
  keplerGl: keplerGlReducer,
  app: appReducer,
});
