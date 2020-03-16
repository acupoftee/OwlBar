// @ts-ignore
import rp from 'request-promise'
import { Dispatch } from 'redux'
import {
  NEWS_REQUEST_START,
  NEWS_REQUEST_SUCCESS,
  NEWS_REQUEST_FAILURE,
  SET_PAGE_NUMBER,
} from './constants'

export interface RequestStart {
  type: typeof NEWS_REQUEST_START
  loading: Boolean
  error: Boolean
}

export interface RequestFailure {
  type: typeof NEWS_REQUEST_FAILURE
  loading: Boolean
  error: Boolean
  message: string
}

export interface RequestSuccess {
  type: typeof NEWS_REQUEST_SUCCESS
  loading: Boolean
  error: Boolean
  newsData: any[]
}

export interface SetPageNumber {
  type: typeof SET_PAGE_NUMBER
  pageNumber: number
}

export type NewsAction =
  | RequestStart
  | RequestFailure
  | RequestSuccess
  | SetPageNumber

const requestStart = (): NewsAction => ({
  type: NEWS_REQUEST_START,
  loading: true,
  error: false,
})

const requestFailure = (message: string): NewsAction => ({
  type: NEWS_REQUEST_FAILURE,
  loading: false,
  error: true,
  message,
})

const requestSuccess = (payload: any): NewsAction => ({
  type: NEWS_REQUEST_SUCCESS,
  loading: false,
  error: false,
  newsData: payload,
})

const setPageNumber = (pageNumber: number): NewsAction => ({
  type: SET_PAGE_NUMBER,
  pageNumber,
})

export function fetchData(pageNumber: number) {
  return (dispatch: Dispatch<NewsAction>) => {
    dispatch(setPageNumber(pageNumber))
    dispatch(requestStart())
    return rp(`https://api.overwatchleague.com/news?page=${pageNumber}`, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
      Origin: 'overwatchleague.com',
    })
      .then((res: any) => JSON.parse(res))
      .then((news: any) => dispatch(requestSuccess(news.blogs)))
      .catch((err: any) => dispatch(requestFailure(err)))
  }
}
