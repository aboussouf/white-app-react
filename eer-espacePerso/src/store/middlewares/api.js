import request from 'superagent'

function call (meta) {
  const method = meta.API_METHOD ? meta.API_METHOD : 'GET'
  let req = request(method, meta.API_CALL)
  if (meta.API_PAYLOAD) {
    req = req.send(meta.API_PAYLOAD)
  }
  if (meta.API_QUERY) {
    req.query(meta.API_QUERY)
  }

  return req
}

export default (store) => (next) => (action) => {
  if (action.meta && action.meta.API_CALL) {
    call(action.meta)
      .then((res) => {
        store.dispatch({
          type: action.meta.API_SUCCESS,
          result: res.body,
        })
      })
      .catch(({ status, response }) => {
        if (action.meta.API_ERRORS && action.meta.API_ERRORS[status]) {
          return store.dispatch({
            type: action.meta.API_ERRORS[status],
            result: response.body,
          })
        }
        throw response
      })
  }
  return next(action)
}
