import {
  MATCH_REQUEST_START,
  MATCH_REQUEST_SUCCESS,
  MATCH_REQUEST_FAILURE
} from "./constants";
import { MatchAction } from "./actions";
import { MatchState } from "./types";

const initialState: MatchState = {
  loading: true,
  error: false,
  matchData: {},
  message: ""
};

export default function reducer(
  state = initialState,
  action: MatchAction
): MatchState {
  switch (action.type) {
    case MATCH_REQUEST_START: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case MATCH_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        matchData: action.matchData
      };
    }
    case MATCH_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message
      };
    }
    default:
      return state;
  }
}
