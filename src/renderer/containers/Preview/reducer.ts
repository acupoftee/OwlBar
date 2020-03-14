import {
  PREVIEW_REQUEST_START,
  PREVIEW_REQUEST_SUCCESS,
  PREVIEW_REQUEST_FAILURE,
} from './constants'
import { PreviewAction } from './actions'
import { PreviewState } from './types'

const initialState: PreviewState = {
  loading: true,
  error: false,
  comparisonData: { home: null, away: null },
  message: '',
}

export default function reducer(
  state = initialState,
  action: PreviewAction
): PreviewState {
  switch (action.type) {
    case PREVIEW_REQUEST_START: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case PREVIEW_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        comparisonData: action.comparisonData,
      }
    }
    case PREVIEW_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
      }
    }
    default:
      return state
  }
}
