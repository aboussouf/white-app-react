import { fromJS } from 'immutable';

const prospectInitState = fromJS(
  {
    typeProspect: 'PARTICULIER',
    boisson: 'CAFE',
    dateRdv: '2018-02-08',
    heureRdv: '20H44',
    agence:
    {
      idAgence: 1,
      name: '',
      adresse: '',

    },
    lastName:
    {
      value: '',
    },
  }

);

function prospectReducer(state = prospectInitState, action) {
  switch (action.type) {
    case 'SET_AGENCE_SELECTIONNEE':
      return state.set('agence', fromJS(action.payload));
    case 'ON_CHANGE':
      return state.setIn(action.key.concat(['value']), fromJS(action.newValue));
    case 'SAVE_PROSPECT_SUCCESS':
      return state.withMutations((ctx) => {
        ctx.setIn(['save', 'result'], fromJS(action.result));
        ctx.setIn(['save', 'status'], 'success');
      });
    case 'SAVE_PROSPECT_ERROR':
      return state.withMutations((ctx) => {
        ctx.setIn(['save', 'result'], fromJS(action.result));
        ctx.setIn(['save', 'status'], 'error');
      });
    default:
      return state;
  }
}

export default prospectReducer;
