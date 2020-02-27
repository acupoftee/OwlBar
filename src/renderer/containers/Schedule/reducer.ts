import {
  SCHEDULE_REQUEST_START,
  SCHEDULE_REQUEST_SUCCESS,
  SCHEDULE_REQUEST_FAILURE,
  SET_WEEK
} from "./constants";
import { ScheduleAction } from "./actions";
import { ScheduleState } from "./types";
import getCurrentWeek from "./date";

const initialState: ScheduleState = {
  loading: true,
  error: false,
  scheduleData: [],
  message: "",
  week: getCurrentWeek()
};

export default function reducer(
  state = initialState,
  action: ScheduleAction
): ScheduleState {
  switch (action.type) {
    case SCHEDULE_REQUEST_START: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case SCHEDULE_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        scheduleData: action.scheduleData
      };
    }
    case SCHEDULE_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message
      };
    }
    case SET_WEEK: {
      return {
        ...state,
        week: action.week
      };
    }
    default:
      return state;
  }
}
