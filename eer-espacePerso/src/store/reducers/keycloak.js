
export const KC_INIT = 'KC_INIT'

export function initKC (payload) {
  return {
    type: KC_INIT,
    payload,
  }
}

export default function keycloakReducer (keycloak = {}, action) {
  switch (action.type) {
    case KC_INIT:
      return action.payload
    default:
      return keycloak
  }
}
