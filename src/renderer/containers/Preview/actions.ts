//@ts-ignore
import rp from 'request-promise'
import { Dispatch } from 'redux'
import {
  PREVIEW_REQUEST_START,
  PREVIEW_REQUEST_SUCCESS,
  PREVIEW_REQUEST_FAILURE,
} from './constants'

export interface PreviewRequestStart {
  type: typeof PREVIEW_REQUEST_START
  loading: boolean
  error: boolean
}

export interface PreviewRequestSuccess {
  type: typeof PREVIEW_REQUEST_SUCCESS
  loading: boolean
  error: boolean
  comparisonData: any
}

export interface PreviewRequestFailure {
  type: typeof PREVIEW_REQUEST_FAILURE
  loading: boolean
  error: boolean
  message: string
}

export type PreviewAction =
  | PreviewRequestStart
  | PreviewRequestSuccess
  | PreviewRequestFailure

const requestStart = (): PreviewAction => ({
  type: PREVIEW_REQUEST_START,
  loading: true,
  error: false,
})

const requestSuccess = (payload: any): PreviewAction => ({
  type: PREVIEW_REQUEST_SUCCESS,
  loading: false,
  error: false,
  comparisonData: payload,
})

const requestFailure = (message: string): PreviewAction => ({
  type: PREVIEW_REQUEST_FAILURE,
  loading: false,
  error: true,
  message,
})

export function fetchPreviewData(id: number) {
  return async (dispatch: Dispatch<PreviewAction>) => {
    dispatch(requestStart())
    try {
      let matchInfo = await rp(`https://api.overwatchleague.com/match/${id}`, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
        Origin: 'overwatchleague.com',
      })

      matchInfo = JSON.parse(matchInfo)

      const homeTeam = matchInfo.competitors[0].abbreviatedName
      const awayTeam = matchInfo.competitors[1].abbreviatedName
      const startDate = matchInfo.startDate

      let standings = await rp('http://owl-bar-api.herokuapp.com/standings', {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
        Origin: 'overwatchleague.com',
      })
      standings = JSON.parse(standings)

      const home = standings.find((team: any) => team.teamAbbName === homeTeam)
      const away = standings.find((team: any) => team.teamAbbName === awayTeam)
      const comparisonData = { home, away, startDate }
      dispatch(requestSuccess(comparisonData))
    } catch (error) {
      dispatch(requestFailure(error))
    }
  }
}
