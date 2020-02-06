import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from "./constants";
import { StandingsAction } from "./actions";
import { StandingsState } from "./types";

const initialState: StandingsState = {
  loading: true,
  error: false,
  standingsData: []
};

export default function reducer(
  state = initialState,
  action: StandingsAction
): StandingsState {
  switch (action.type) {
    case REQUEST_START: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        standingsData: action.standingsData
      };
    }
    case REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return state;
  }
}
