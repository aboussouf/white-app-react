import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import Keycloak from 'keycloak-js'
import { makeRootReducer } from './reducers'
import { initKC } from './reducers/keycloak'
import { updateLocation } from './reducers/location'
import apiMiddleware from 'store/middlewares/api'

const config = require('./config/keycloak.json')

const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    apiMiddleware,
    thunk
  ]
  // ======================================================
  // Keyckloak Configuration
  // ======================================================
  let keycloakInitConfig = {}
  keycloakInitConfig.url = config['auth-server-url']
  keycloakInitConfig.realm = config['realm']
  keycloakInitConfig.clientId = config['resource']
  const kc = Keycloak(keycloakInitConfig)
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  kc.init({ onLoad: 'login-required' }).success(authenticated => {
    store.dispatch(initKC(kc))
    if (authenticated) {
      store.dispatch(initKC(kc))
    }
  })

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore
