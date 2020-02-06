import { Dispatch } from "redux";
import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from "./constants";
import { StandingsState } from "./types";
import fetch from "cross-fetch";

export interface RequestStart {
  type: typeof REQUEST_START;
  loading: Boolean;
  error: Boolean;
}

export interface RequestFailure {
  type: typeof REQUEST_FAILURE;
  loading: Boolean;
  error: Boolean;
}

export interface RequestSuccess {
  type: typeof REQUEST_SUCCESS;
  loading: Boolean;
  error: Boolean;
  standingsData: Array<Object>;
}

export type StandingsAction = RequestStart | RequestFailure | RequestSuccess;

const requestStart = (): StandingsAction => ({
  type: REQUEST_START,
  loading: true,
  error: false
});

const requestFailure = (): StandingsAction => ({
  type: REQUEST_FAILURE,
  loading: false,
  error: true
});

const requestSuccess = (payload: any): StandingsAction => ({
  type: REQUEST_SUCCESS,
  loading: false,
  error: false,
  standingsData: payload
});

export function fetchData() {
  return (dispatch: Dispatch<StandingsAction>, getState: StandingsState) => {
    dispatch(requestStart());
    return fetch("https://api.overwatchleague.com/v2/standings")
      .then(response => response.json())
      .then(json => dispatch(requestSuccess(json)))
      .catch(() => dispatch(requestFailure()));
  };
}
