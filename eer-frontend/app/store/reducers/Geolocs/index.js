import { fromJS } from 'immutable';


function agencesReducer(state = fromJS({}), action) {
  switch (action.type) {
    case 'GET_CITIES_LIST_SUCCESS':
      return state.withMutations((ctx) => {
        ctx.setIn(['cities', 'result'], action.result);
        ctx.setIn(['cities', 'status'], 'success');
      });
    case 'GET_CITIES_LIST_ERROR':
      return state.withMutations((ctx) => {
        ctx.setIn(['cities', 'result'], fromJS(action.result));
        ctx.setIn(['cities', 'status'], 'error');
      });
    case 'GET_AGENCY_LIST_SUCCESS':
      return state.withMutations((ctx) => {
        ctx.setIn(['agences', 'result'], fromJS(action.result));
        ctx.setIn(['agences', 'status'], 'success');
      });
    case 'GET_AGENCY_LIST_ERROR':
      return state.withMutations((ctx) => {
        ctx.setIn(['agences', 'result'], fromJS(action.result));
        ctx.setIn(['agences', 'status'], 'error');
      });
    case 'GET_CITY_AGENCIES_SUCCESS':
      return state.withMutations((ctx) => {
        ctx.setIn(['cityAgences', 'result'], fromJS(action.result));
        ctx.setIn(['cityAgences', 'status'], 'success');
      });
    case 'GET_CITY_AGENCIES_ERROR':
      return state.withMutations((ctx) => {
        ctx.setIn(['cityAgences', 'result'], fromJS(action.result));
        ctx.setIn(['cityAgences', 'status'], 'error');
      });
    default:
      return state;
  }
}

export default agencesReducer;
