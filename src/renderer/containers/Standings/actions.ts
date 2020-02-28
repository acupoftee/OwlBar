// @ts-ignore
import $ from "cheerio";
// @ts-ignore
import rp from "request-promise";
import { Dispatch } from "redux";
import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from "./constants";
import { StandingsState } from "./types";
// import getStandings from "../../../api/StandingsAPI";

// import fetch from "cross-fetch";
// import { request } from "http";

export interface RequestStart {
  type: typeof REQUEST_START;
  loading: Boolean;
  error: Boolean;
}

export interface RequestFailure {
  type: typeof REQUEST_FAILURE;
  loading: Boolean;
  error: Boolean;
  message: String;
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

const requestFailure = (message: string): StandingsAction => ({
  type: REQUEST_FAILURE,
  loading: false,
  error: true,
  message
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
    return rp("http://owl-bar-api.herokuapp.com/standings", {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With",
      Origin: "overwatchleague.com"
    })
      .then((json: string) => JSON.parse(json))
      .then((standings: any) => dispatch(requestSuccess(standings)))
      .catch((err: any) => dispatch(requestFailure(err)));
  };
}
