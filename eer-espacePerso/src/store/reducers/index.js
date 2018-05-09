import { combineReducers } from 'redux'
import locationReducer from './location'
import prospectReducer from './Prospect'
import keyckloakReducer from './keycloak'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    prospect: prospectReducer,
    keyckloak: keyckloakReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
