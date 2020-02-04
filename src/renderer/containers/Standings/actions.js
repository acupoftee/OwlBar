import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from './constants'
import fetch from 'cross-fetch'

const requestStart = () => ({ type: REQUEST_START })
const requestFailure = () => ({ type: REQUEST_FAILURE })
const requestSuccess = payload => ({
  type: REQUEST_SUCCESS,
  payload
})

export function fetchData() {
  return (dispatch, getState) => {
    dispatch(requestStart())
    return fetch('https://api.overwatchleague.com/v2/standings')
      .then(response => response.json())
      .then(json => dispatch(requestSuccess(json)))
      .catch(() => dispatch(requestFailure()))
  }
}
