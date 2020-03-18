import React, { useLayoutEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { TeamsBanner, Table } from '../../components/Preview'
import { BackToSchedule } from '../../components/MatchSummary'
import DataSection from '../../components/shared/DataSection'
import * as actions from './actions'
import { PreviewAction } from './actions'
import { PreviewState } from './types'
import { PageBar } from '../../components/TabBar'
import { HexLoader } from '../../components/Loaders'

export interface Props {
  fetchPreviewData: (id: number) => Promise<PreviewAction>
  loading: boolean
  error: boolean
  comparisonData: any
}

const Preview = ({
  fetchPreviewData,
  error,
  loading,
  comparisonData,
}: {
  fetchPreviewData: (id: number) => Promise<PreviewAction>
  loading: boolean
  error: boolean
  comparisonData: any
}) => {
  const { id } = useParams()
  const history = useHistory()

  useLayoutEffect(() => {
    fetchPreviewData(+id!)
  }, [])

  return (
    <PageBar currentTab={1}>
      <>
        <BackToSchedule text="Match Up" back={() => history.push('/')} />
        <DataSection
          style={{
            height: 'auto',
            marginTop: '30px',
          }}
        >
          {loading && <HexLoader />}
          {error && 'error loading Preview'}
          {!loading && !error && (
            <div style={{ overflowY: 'scroll' }}>
              <TeamsBanner
                homeTeamAbbreviation={comparisonData.home.teamAbbName}
                awayTeamAbbreviation={comparisonData.away.teamAbbName}
                matchDate={comparisonData.startDate}
              />
              <Table home={comparisonData.home} away={comparisonData.away} />
            </div>
          )}
        </DataSection>
      </>
    </PageBar>
  )
}

const mapStateToProps = ({ preview }: { preview: PreviewState }): any => ({
  loading: preview.loading,
  error: preview.error,
  comparisonData: preview.comparisonData,
})

export default connect<PreviewState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(Preview)
