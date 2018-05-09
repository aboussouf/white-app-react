
export function getProspect (payload) {
  return {
    type: 'GET_PROSPECT',
    meta: {
      API_CALL: `/prospect/prospect/identifiant/${payload}`,
      API_SUCCESS: 'GET_PROSPECT_SUCCESS',
      API_ERRORS: {
        500: 'GET_PROSPECT_ERROR',
        404: 'GET_PROSPECT_ERROR',
        400: 'GET_PROSPECT_ERROR',
      },
    },
  }
}

/*    SAve prospect  */

export function saveProspect (prospect) {
  return {
    type: 'SAVE_PROSPECT',
    meta: {
      API_CALL: '/prospect/save',
      API_SUCCESS: 'SAVE_PROSPECT_SUCCESS',
      API_METHOD: 'POST',
      API_PAYLOAD: prospect,
      API_ERRORS: {
        500: 'SAVE_PROSPECT_ERROR',
        404: 'SAVE_PROSPECT_ERROR',
      },
    },
  }
}
