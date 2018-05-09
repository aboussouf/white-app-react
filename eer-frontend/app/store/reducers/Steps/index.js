import { fromJS } from 'immutable';
import { GO_TO_STEP, GO_NEXT, GO_BACK } from '../../actions/Steps';
import * as constant from '../../../utils/constants';


/**
 * init state with empty list
 */

const initState = fromJS(
  {
    stepIndex: 0,
    mySteps: [
      {
        step: 0,
        title: 'FAISONS CONNAISSANCE',
      },
      {
        step: 1,
        title: 'RENCONTRONS-NOUS',
      },
      {
        step: 2,
        title: 'NOTRE RENDEZ-VOUS',
      },
    ],
  }
);

function stepReducer(state = initState, action) {
  switch (action.type) {
    case GO_TO_STEP:
      return state.set('stepIndex', fromJS(action.payload));
    case GO_NEXT:
      if (action.payload < constant.STEPER_INDEX_LIMIT) {
        return state.set('stepIndex', action.payload + 1);
      }
    case GO_BACK:
      if (action.payload > 0) {
        return state.set('stepIndex', action.payload - 1);
      }
    default:
      return state;
  }
}

export default stepReducer;
