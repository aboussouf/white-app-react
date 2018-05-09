/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import prospectReducer from 'store/reducers/Prospect';
import geolocsReducer from 'store/reducers/Geolocs';
import stepReducer from './Steps';

const routeInitialState = fromJS({
  location: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    step: stepReducer,
    prospect: prospectReducer,
    geolocs: geolocsReducer,
    ...injectedReducers,
  });
}
