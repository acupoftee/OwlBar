// @ts-ignore
import $ from "cheerio";
// @ts-ignore
import rp from "request-promise";
import { Dispatch } from "redux";
import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from "./constants";
import { StandingsState } from "./types";
import getStandings from "../../../api/StandingsAPI";

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
    // return fetch("https://api.overwatchleague.com/v2/standings")
    //   .then(response => response.json())
    //   .then(json => dispatch(requestSuccess(json)))
    //   .catch(() => dispatch(requestFailure()));
    // return getStandings()
    //   .then(standings => {
    //     console.log(standings);
    //     dispatch(requestSuccess(standings));
    //   })
    //   .catch((err: string) => dispatch(requestFailure(err)));
    // heroku: https://salty-eyrie-03841.herokuapp.com/
    return rp(
      " https://salty-eyrie-03841.herokuapp.com/" +
        "https://overwatchleague.com/en-us/standings",
      {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    )
      .then((html: any) => {
        const standingsText = $("#__NEXT_DATA__", html)[0].children[0].data;
        const standingsData = JSON.parse(standingsText);
        const standings =
          standingsData.props.pageProps.blocks[1].standings.tabs[0].tables[0]
            .teams;
        console.log("standings", standings);
        dispatch(requestSuccess(standings));
      })
      .catch((err: any) => dispatch(requestFailure(err)));
  };
}
