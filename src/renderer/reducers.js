import { combineReducers } from 'redux'

import standingsReducer from './containers/Standings/reducer'
import scheduleReducer from './containers/Schedule/reducer'
const rootReducer = combineReducers({
  standings: standingsReducer,
  schedule: scheduleReducer
})

export default rootReducer
