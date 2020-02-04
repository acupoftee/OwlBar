import { combineReducers } from 'redux'

import standingsReducer from './containers/Standings/reducer'

const rootReducer = combineReducers({
  standings: standingsReducer
})

export default rootReducer
