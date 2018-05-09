import { createSelector } from 'reselect'

const prospectState = (state) => state.prospect

const makeSelectProspect = () => createSelector(
  prospectState,
  (prosState) => prosState.toJS(),
)

export {
  makeSelectProspect,
}
