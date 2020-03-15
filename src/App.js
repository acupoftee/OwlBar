import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './renderer/store'
import Standings from './renderer/containers/Standings'
import GlobalStyle from './renderer/styles/global'
import Schedule from './renderer/containers/Schedule'
import MatchSummary from './renderer/containers/MatchSummary'
import Preview from './renderer/containers/Preview'
import SettingsPage from './renderer/containers/Settings'
import { NewsCard } from './renderer/components/News'

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      {/* <Router> */}
      <GlobalStyle />
      <NewsCard
        blogId={23335605}
        datePublished={1584118080000}
        blogTitle="Overwatch League Matches Moving Online"
        blogTopic="announcement"
        blogSummary="Matches will be played online, with teams competing in three different regions."
        blogImageUrl="https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/h3/H38Y0PI7Z6C31584043170625.jpg"
      />
      {/* <Switch>
          <Route exact path="/">
            <Schedule />
          </Route>
          <Route path="/standings">
            <Standings />
          </Route>
          <Route path="/match/:id">
            <MatchSummary />
          </Route>
          <Route path="/preview/:id">
            <Preview />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </Switch> */}
      {/* </Router> */}
    </Provider>
  )
}

export default App
