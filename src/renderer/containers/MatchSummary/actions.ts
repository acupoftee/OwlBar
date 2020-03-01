// @ts-ignore
import rp from "request-promise";
import { Dispatch } from "redux";
import {
  MATCH_REQUEST_START,
  MATCH_REQUEST_SUCCESS,
  MATCH_REQUEST_FAILURE
} from "./constants";

export interface RequestStart {
  type: typeof MATCH_REQUEST_START;
  loading: Boolean;
  error: Boolean;
}

export interface RequestFailure {
  type: typeof MATCH_REQUEST_FAILURE;
  loading: Boolean;
  error: Boolean;
  message: string;
}

export interface RequestSuccess {
  type: typeof MATCH_REQUEST_SUCCESS;
  loading: Boolean;
  error: Boolean;
  matchData: Object;
}

export type MatchAction = RequestStart | RequestFailure | RequestSuccess;

const requestStart = (): MatchAction => ({
  type: MATCH_REQUEST_START,
  loading: true,
  error: false
});

const requestFailure = (message: string): MatchAction => ({
  type: MATCH_REQUEST_FAILURE,
  loading: false,
  error: true,
  message
});

const requestSuccess = (payload: any): MatchAction => ({
  type: MATCH_REQUEST_SUCCESS,
  loading: false,
  error: false,
  matchData: payload
});

export function fetchMatchData(id: number) {
  return (dispatch: Dispatch<MatchAction>) => {
    dispatch(requestStart());
    return rp(`https://api.overwatchleague.com/match/${id}`, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With",
      Origin: "overwatchleague.com"
    })
      .then((match: any) => dispatch(requestSuccess(JSON.parse(match))))
      .catch((err: any) => dispatch(requestFailure(err)));
  };
}
