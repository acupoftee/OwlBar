import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './renderer/store'
import Standings from './renderer/containers/Standings'
import GlobalStyle from './renderer/styles/global'
import Schedule from './renderer/containers/Schedule'
import MatchSummary from './renderer/containers/MatchSummary'

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Schedule />
          </Route>
          <Route path="/standings">
            <Standings />
          </Route>
          <Route path="/match/:id">
            <MatchSummary />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
