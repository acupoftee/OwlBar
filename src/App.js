import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './renderer/store'
import Standings from './renderer/containers/Standings'
import GlobalStyle from './renderer/styles/global'
import Schedule from './renderer/containers/Schedule'

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        {/* <Standings /> */}
        <Schedule />
      </>
    </Provider>
  )
}

export default App
