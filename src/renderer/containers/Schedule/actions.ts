import { Dispatch } from "redux";
import {
  SCHEDULE_REQUEST_START,
  SCHEDULE_REQUEST_SUCCESS,
  SCHEDULE_REQUEST_FAILURE,
  SET_WEEK
} from "./constants";
import { ScheduleState } from "./types";
// import fetch from "cross-fetch";
// @ts-ignore
import rp from "request-promise";

import getSchedule from "../../../api/ScheduleAPI";

export interface ScheduleRequestStart {
  type: typeof SCHEDULE_REQUEST_START;
  loading: Boolean;
  error: Boolean;
}

export interface ScheduleRequestSuccess {
  type: typeof SCHEDULE_REQUEST_SUCCESS;
  loading: Boolean;
  error: Boolean;
  scheduleData: Array<Object>;
}

export interface ScheduleRequestFailure {
  type: typeof SCHEDULE_REQUEST_FAILURE;
  loading: Boolean;
  error: Boolean;
  message: String;
}

export interface ScheduleWeek {
  type: typeof SET_WEEK;
  week: number;
}

export type ScheduleAction =
  | ScheduleRequestStart
  | ScheduleRequestSuccess
  | ScheduleRequestFailure
  | ScheduleWeek;

const requestStart = (): ScheduleAction => ({
  type: SCHEDULE_REQUEST_START,
  loading: true,
  error: false
});

const requestSuccess = (payload: any): ScheduleAction => ({
  type: SCHEDULE_REQUEST_SUCCESS,
  loading: false,
  error: false,
  scheduleData: payload
});

const requestFailure = (message: string): ScheduleAction => ({
  type: SCHEDULE_REQUEST_FAILURE,
  loading: false,
  error: true,
  message
});

const setWeek = (week: number): ScheduleAction => ({
  type: SET_WEEK,
  week
});

// grab schedule endpoint
// use week 1
// 2nd approach:
// get closest week number
export function fetchScheduleData(week: number) {
  return (dispatch: Dispatch<ScheduleAction>, getState: ScheduleState) => {
    dispatch(setWeek(week));
    dispatch(requestStart());
    return rp(
      "https://salty-eyrie-03841.herokuapp.com/" +
        `https://owl-bar-api.herokuapp.com/schedule/week/${week}`,
      {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    )
      .then((json: string) => JSON.parse(json))
      .then((schedule: any) => dispatch(requestSuccess(schedule.content)))
      .catch((err: any) => dispatch(requestFailure(err)));
  };
}
