import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './renderer/store'
import Standings from './renderer/containers/Standings'

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <Standings />
    </Provider>
  )
}

export default App
