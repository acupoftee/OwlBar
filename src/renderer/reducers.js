import { combineReducers } from 'redux'

import standingsReducer from './containers/Standings/reducer'
import scheduleReducer from './containers/Schedule/reducer'
import matchReducer from './containers/MatchSummary/reducer'
import previewReducer from './containers/Preview/reducer'

const rootReducer = combineReducers({
  standings: standingsReducer,
  schedule: scheduleReducer,
  match: matchReducer,
  preview: previewReducer
})

export default rootReducer
