// @ts-ignore
import rp from "request-promise";
import { Dispatch } from "redux";
import {
  SCHEDULE_REQUEST_START,
  SCHEDULE_REQUEST_SUCCESS,
  SCHEDULE_REQUEST_FAILURE,
  SET_WEEK
} from "./constants";
import { ScheduleState } from "./types";

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

export function fetchScheduleData(week: number) {
  return (dispatch: Dispatch<ScheduleAction>, getState: ScheduleState) => {
    dispatch(setWeek(week));
    dispatch(requestStart());
    return rp(`http://owl-bar-api.herokuapp.com/schedule/week/${week}`, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With",
      Origin: "overwatchleague.com"
    })
      .then((json: string) => JSON.parse(json))
      .then((schedule: any) => dispatch(requestSuccess(schedule.content)))
      .catch((err: any) => dispatch(requestFailure(err)));
  };
}
