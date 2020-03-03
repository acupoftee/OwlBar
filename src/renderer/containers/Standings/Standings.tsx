import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { StandingsTable } from '../../components/Standings'
import DataSection from '../../components/shared/DataSection'
import * as actions from './actions'
import { StandingsAction } from './actions'
import { StandingsState } from './types'
import { PageBar } from '../../components/TabBar'
import { HexLoader } from '../../components/Loaders'
import { colors } from '../../styles/theme'

const Conference = styled.div`
  padding: 7px;
  width: 100vw;
  height: 35px;
  // background: #141114;
  background-color: ${colors.black};
  color: #fff;
  font-weight: 100;
  font-size: 15px;
  text-align: center;
  text-transform: capitalize;
`

export interface Props {
  fetchData: () => Promise<StandingsAction>
  loading: boolean
  error: boolean
  standingsData: Object[]
}

const Standings = ({
  fetchData,
  error,
  loading,
  standingsData,
}: {
  fetchData: () => Promise<StandingsAction>
  loading: boolean
  error: boolean
  standingsData: Object[]
}) => {
  useLayoutEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <PageBar currentTab={2}>
      <DataSection>
        <Conference>Standings</Conference>
        {loading && <HexLoader />}
        {error && 'error loading standings'}
        {!loading && !error && <StandingsTable data={standingsData} />}
      </DataSection>
    </PageBar>
  )
}

const mapStateToProps = ({
  standings,
}: {
  standings: StandingsState
}): any => ({
  loading: standings.loading,
  error: standings.error,
  standingsData: standings.standingsData,
})

export default connect<StandingsState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(Standings)
