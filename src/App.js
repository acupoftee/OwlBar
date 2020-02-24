import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './renderer/store'
import Standings from './renderer/containers/Standings'
import GlobalStyle from './renderer/styles/global'
import { Banner, MatchCard } from './renderer/components/Schedule/'
import Schedule from './renderer/containers/Schedule'

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        {/* <Standings /> */}
        {/* <Banner bannerBackground="https://images.blz-contentstack.com/v3/assets/blt321317473c90505c/blt92a006bff1886632/5dd860d569af1649167dec49/NYE_Banner_Skyline.png" bannerLogo="https://images.blz-contentstack.com/v3/assets/blt321317473c90505c/blt4181aa67c8c5847c/5dd8612369af1649167dec4f/weekends2-535x488.png" host="NYE" location="Hammerstein Ballroom" />
        <MatchCard homeTeamAbb="LDN" awayTeamAbb="NYE" />
        <MatchCard homeTeamAbb="DAL" awayTeamAbb="BOS" />
        <MatchCard homeTeamAbb="SFS" awayTeamAbb="GLA" /> */}
        <Schedule />
      </>
    </Provider>
  )
}

export default App
