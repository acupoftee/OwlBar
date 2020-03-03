import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { EventCard, DateSelector } from '../../components/Schedule'
import DataSection from '../../components/shared/DataSection'
import * as actions from './actions'
import { ScheduleAction } from './actions'
import { ScheduleState } from './types'
import { PageBar } from '../../components/TabBar'
import { HexLoader } from '../../components/Loaders'

const Divider = styled.hr`
  margin: 0 25px 20px 25px;
`
export interface Props {
  fetchScheduleData: (week: number) => Promise<ScheduleAction>
  loading: boolean
  error: boolean
  scheduleData: any
  week: number
}

const Schedule = ({
  fetchScheduleData,
  error,
  loading,
  scheduleData,
  week,
}: {
  fetchScheduleData: (week: number) => Promise<ScheduleAction>
  loading: boolean
  error: boolean
  scheduleData: any
  week: number
}) => {
  useLayoutEffect(() => {
    fetchScheduleData(week)
  }, [])

  const addWeek = (week: number) => {
    let newWeek = week
    if (week < 27) {
      newWeek++
    } else {
      newWeek = 27
    }
    return newWeek
  }

  const subWeek = (week: number) => {
    let newWeek = week
    if (week > 1) {
      newWeek--
    } else {
      newWeek = 1
    }
    return newWeek
  }

  return (
    <PageBar currentTab={1}>
      <>
        <DateSelector
          date={week}
          addWeek={() => {
            const newWeek = addWeek(week)
            fetchScheduleData(newWeek)
          }}
          subWeek={() => {
            const newWeek = subWeek(week)
            fetchScheduleData(newWeek)
          }}
          disableAdd={week === 27}
          disableSub={week === 1}
        />
        <DataSection
          style={{
            height: 'auto',
            marginTop: '30px',
          }}
        >
          {loading && <HexLoader />}
          {error && 'error loading schedule'}
          {!loading && !error && (
            <div style={{ overflowY: 'scroll' }}>
              {scheduleData.tableData.events.map((event: any, idx: number) => {
                return (
                  <>
                    <EventCard
                      key={idx}
                      bannerProps={{
                        bannerBackground: event.eventBanner?.backgroundImageUrl,
                        bannerLogo: event.eventBanner?.featuredImage,
                        host: event.eventBanner?.hostingTeam.shortName,
                        hostId: event.eventBanner?.hostingTeam.teamId,
                        location: event.eventBanner?.venue.title,
                      }}
                      matches={event.matches}
                    />
                    {idx !== scheduleData.tableData.events.length - 1 && (
                      <Divider key={idx + 1} />
                    )}
                  </>
                )
              })}
            </div>
          )}
        </DataSection>
      </>
    </PageBar>
  )
}

const mapStateToProps = ({ schedule }: { schedule: ScheduleState }): any => ({
  loading: schedule.loading,
  error: schedule.error,
  scheduleData: schedule.scheduleData,
  week: schedule.week,
})

export default connect<ScheduleState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(Schedule)
