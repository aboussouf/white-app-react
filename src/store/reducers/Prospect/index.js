import { fromJS } from 'immutable'

const prospectInitState = fromJS({})

function prospectReducer (state = prospectInitState, action) {
  switch (action.type) {
    case 'GET_PROSPECT_SUCCESS':
      return state.withMutations((ctx) => {
        //state.set('prospect', fromJS(action.payload))
        ctx.setIn(['prospect', 'result'], fromJS(action.result))
        ctx.setIn(['prospect', 'status'], 'success')
      })
    case 'GET_PROSPECT_ERROR':
      return state.withMutations((ctx) => {
        ctx.setIn(['prospect', 'result'], fromJS(action.result))
        ctx.setIn(['prospect', 'status'], 'error')
      })

    case 'ON_CHANGE':
      return state.setIn(action.key.concat(['value']), fromJS(action.newValue))
    case 'SAVE_PROSPECT_SUCCESS':
      return state.withMutations((ctx) => {
        ctx.setIn(['save', 'result'], fromJS(action.result))
        ctx.setIn(['save', 'status'], 'success')
      })
    case 'SAVE_PROSPECT_ERROR':
      return state.withMutations((ctx) => {
        ctx.setIn(['save', 'result'], fromJS(action.result))
        ctx.setIn(['save', 'status'], 'error')
      })
    default:
      return state
  }
}

export default prospectReducer
