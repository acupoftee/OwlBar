import React, { useLayoutEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  GameCard,
  SummaryBanner,
  BackToSchedule,
} from '../../components/MatchSummary'
import DataSection from '../../components/shared/DataSection'
import * as actions from './actions'
import { MatchAction } from './actions'
import { MatchState } from './types'
import { PageBar } from '../../components/TabBar'
import { HexLoader } from '../../components/Loaders'
import { Confetti } from '../../components/Confetti'
import { getMapById } from './map'

export interface Props {
  fetchMatchData: (id: number) => Promise<MatchAction>
  loading: boolean
  error: boolean
  matchData: any
}

const Match = ({
  fetchMatchData,
  error,
  loading,
  matchData,
}: {
  fetchMatchData: (id: number) => Promise<MatchAction>
  loading: boolean
  error: boolean
  matchData: any
}) => {
  const { id } = useParams()
  const history = useHistory()

  useLayoutEffect(() => {
    fetchMatchData(+id!)
  }, [])

  const getWinner = (scores: number[], competitors: string[]) => {
    const winner = Math.max(scores[0], scores[1])
    return winner === scores[0] ? competitors[0] : competitors[1]
  }

  let winner = null

  if (matchData.scores) {
    const scores = matchData.scores.map((score: any) => score.value)

    winner = getWinner(scores, [
      matchData.competitors[0].abbreviatedName,
      matchData.competitors[1].abbreviatedName,
    ])
  }

  return (
    <PageBar currentTab={1}>
      <>
        <BackToSchedule text="Match Summary" back={() => history.push('/')} />
        <DataSection
          style={{
            height: 'auto',
            marginTop: '30px',
          }}
        >
          {loading && <HexLoader />}
          {error && 'error loading Match'}
          {!loading && !error && (
            <div style={{ overflowY: 'scroll' }}>
              {matchData.status === 'CONCLUDED' && winner && (
                <Confetti winner={winner} />
              )}
              <SummaryBanner
                homeTeamAbbreviation={matchData.competitors[0].abbreviatedName}
                awayTeamAbbreviation={matchData.competitors[1].abbreviatedName}
                scores={matchData.scores.map((score: any) => score.value)}
                matchDate={matchData.startDate}
                gameLength={matchData.games.length}
              />
              <div>
                {matchData.games.map((game: any) => {
                  const map = getMapById(game.attributes.mapGuid)
                  return (
                    <GameCard
                      key={game.number}
                      homeTeam={matchData.competitors[0].abbreviatedName}
                      awayTeam={matchData.competitors[1].abbreviatedName}
                      scores={game.points}
                      mapImage={map!.icon}
                      mapName={map!.name}
                      mapNumber={game.number}
                      mapType={map!.type}
                    />
                  )
                })}
              </div>
            </div>
          )}
        </DataSection>
      </>
    </PageBar>
  )
}

const mapStateToProps = ({ match }: { match: MatchState }): any => ({
  loading: match.loading,
  error: match.error,
  matchData: match.matchData,
})

export default connect<MatchState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(Match)
