import {
  ARTICLE_REQUEST_START,
  ARTICLE_REQUEST_SUCCESS,
  ARTICLE_REQUEST_FAILURE,
} from './constants'
import { ArticleAction } from './actions'
import { ArticleState } from './types'

const initialState: ArticleState = {
  loading: true,
  error: false,
  message: '',
  article: {},
}

export default function reducer(
  state = initialState,
  action: ArticleAction
): ArticleState {
  switch (action.type) {
    case ARTICLE_REQUEST_START: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ARTICLE_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        article: action.article,
      }
    }
    case ARTICLE_REQUEST_FAILURE: {
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
