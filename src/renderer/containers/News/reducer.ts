import {
  NEWS_REQUEST_START,
  NEWS_REQUEST_SUCCESS,
  NEWS_REQUEST_FAILURE,
  SET_PAGE_NUMBER,
} from './constants'
import { NewsAction } from './actions'
import { NewsState } from './types'

const initialState: NewsState = {
  loading: true,
  error: false,
  newsData: [],
  message: '',
  pageNumber: 1,
}

export default function reducer(
  state = initialState,
  action: NewsAction
): NewsState {
  switch (action.type) {
    case NEWS_REQUEST_START: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case NEWS_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        newsData: action.newsData,
      }
    }
    case NEWS_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
      }
    }
    case SET_PAGE_NUMBER: {
      return {
        ...state,
        pageNumber: action.pageNumber,
      }
    }
    default:
      return state
  }
}
