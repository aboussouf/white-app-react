
/*    Get list of Cities        */
export function getCities() {
  return {
    type: 'GET_CITIES_LIST',
    meta: {
      API_CALL: '/geolocalisation/ville',
      API_SUCCESS: 'GET_CITIES_LIST_SUCCESS',
      API_ERRORS: {
        500: 'GET_CITIES_LIST_ERROR',
        404: 'GET_CITIES_LIST_ERROR',
      },
    },
  };
}
/*    Get list of Cities        */
export function setAgenceSelectionnee(agence) {
  return {
    type: 'SET_AGENCE_SELECTIONNEE',
    payload: agence,
  };
}
/*    Get list of Branches   */

export function getBranches() {
  return {
    type: 'GET_AGENCY_LIST',
    meta: {
      API_CALL: '/geolocalisation/agence',
      API_SUCCESS: 'GET_AGENCY_LIST_SUCCESS',
      API_ERRORS: {
        500: 'GET_AGENCY_LIST_ERROR',
        404: 'GET_AGENCY_LIST_ERROR',
      },
    },
  };
}
/*    Get list of branches by city  */

export function getAgencysByCitie(payload) {
  return {
    type: 'GET_CITY_AGENCIES',
    meta: {
      API_CALL: `/geolocalisation/ville/${payload}/agences`,
      API_SUCCESS: 'GET_CITY_AGENCIES_SUCCESS',
      API_ERRORS: {
        500: 'GET_CITY_AGENCIES_ERROR',
        404: 'GET_CITY_AGENCIES_ERROR',
      },
    },
  };
}
