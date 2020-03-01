import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './renderer/store'
import Standings from './renderer/containers/Standings'
import GlobalStyle from './renderer/styles/global'
import Schedule from './renderer/containers/Schedule'
import MatchSummary from './renderer/containers/MatchSummary'
import { GameCard, SummaryBanner } from './renderer/components/MatchSummary'

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        <MatchSummary />
        {/* <SummaryBanner homeTeamAbbreviation="NYE" awayTeamAbbreviation="PHI" scores={[3, 1]} matchDate="SATURDAY, FEB 29, 2020 4:45 PM EST" />
        <div style={{ transform: "scale(0.95)" }}>
          <GameCard
            homeTeam="NYE"
            awayTeam="PHI"
            scores={[1, 3]}
            mapName="Kings Row"
            mapNumber="1"
            mapType="hybrid"
            mapImage="https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/kings-row-thumb.jpg"
          />
          <GameCard
            homeTeam="NYE"
            awayTeam="PHI"
            scores={[0, 2]}
            mapName="Hanamura"
            mapNumber="2"
            mapType="assault"
            mapImage="https://d1u1mce87gyfbn.cloudfront.net/images/pages/game/maps-section/hanamura-thumb.jpg"
          />
        </div> */}
        {/* <Standings /> */}
        {/* <Schedule /> */}
      </>
    </Provider >
  )
}

export default App
