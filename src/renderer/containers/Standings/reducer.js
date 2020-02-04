import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from './constants'

const initialState = {
  loading: true,
  error: false,
  standingsData: {}
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_START: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        standingsData: action.payload
      }
    }
    case REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    default:
      return state
  }
}
