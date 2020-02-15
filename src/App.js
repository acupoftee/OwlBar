import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './renderer/store'
import Standings from './renderer/containers/Standings'
import GlobalStyle from './renderer/styles/global'

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        <Standings />
      </>
    </Provider>
  )
}

export default App
