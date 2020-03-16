// @ts-ignore
import rp from 'request-promise'
import { Dispatch } from 'redux'
import {
  ARTICLE_REQUEST_START,
  ARTICLE_REQUEST_SUCCESS,
  ARTICLE_REQUEST_FAILURE,
} from './constants'

export interface ArticleRequestStart {
  type: typeof ARTICLE_REQUEST_START
  loading: boolean
  error: boolean
}

export interface ArticleRequestSuccess {
  type: typeof ARTICLE_REQUEST_SUCCESS
  loading: boolean
  error: boolean
  article: any
}

export interface ArticleRequestFailure {
  type: typeof ARTICLE_REQUEST_FAILURE
  loading: boolean
  error: boolean
  message: string
}

export type ArticleAction =
  | ArticleRequestStart
  | ArticleRequestSuccess
  | ArticleRequestFailure

const requestStart = (): ArticleAction => ({
  type: ARTICLE_REQUEST_START,
  loading: true,
  error: false,
})

const requestSuccess = (payload: any): ArticleAction => ({
  type: ARTICLE_REQUEST_SUCCESS,
  loading: false,
  error: false,
  article: payload,
})

const requestFailure = (message: string): ArticleAction => ({
  type: ARTICLE_REQUEST_FAILURE,
  loading: false,
  error: true,
  message,
})

export function fetchData(id: number) {
  return async (dispatch: Dispatch<ArticleAction>) => {
    dispatch(requestStart())
    try {
      const article = await rp(`https://api.overwatchleague.com/news/${id}`, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
        Origin: 'overwatchleague.com',
      })
      dispatch(requestSuccess(JSON.parse(article)))
    } catch (error) {
      dispatch(requestFailure(error))
    }
  }
}
