import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Flex } from 'antd-mobile'
import { EventCard, Paginator, BackToToday } from '../../components/Schedule'
import DataSection from '../../components/shared/DataSection'
import * as actions from './actions'
import { ScheduleAction } from './actions'
import { ScheduleState } from './types'
import { PageBar } from '../../components/TabBar'
import { HexLoader } from '../../components/Loaders'
import getCurrentWeek from './date'

const Divider = styled.hr`
  margin: 20px 25px 20px 25px;
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

  const currentWeek = getCurrentWeek()

  const nextPage = (week: number) => {
    let newWeek = week
    if (week < 27) {
      newWeek++
    } else {
      newWeek = 27
    }
    return newWeek
  }

  const prevPage = (week: number) => {
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
        <Paginator
          text={`Week ${week} Schedule`}
          nextPage={() => {
            const newWeek = nextPage(week)
            fetchScheduleData(newWeek)
          }}
          prevPage={() => {
            const newWeek = prevPage(week)
            fetchScheduleData(newWeek)
          }}
          disableNext={week === 27 || loading}
          disablePrev={week === 1 || loading}
        />
        <DataSection>
          {loading && <HexLoader />}
          {error && 'error loading schedule'}
          {!loading && !error && scheduleData.tableData.events.length === 0 && (
            <>
              {week !== currentWeek && (
                <BackToToday
                  backFunction={() => fetchScheduleData(currentWeek)}
                />
              )}
              <Flex align="center" justify="center" style={{ height: '100vh' }}>
                There are no matches this week.
              </Flex>
            </>
          )}
          {!loading &&
            !error &&
            week === 13 &&
            scheduleData.tableData.events[0].matches.length === 0 && (
              <>
                {week !== currentWeek && (
                  <BackToToday
                    backFunction={() => fetchScheduleData(currentWeek)}
                  />
                )}
                <Flex
                  align="center"
                  justify="center"
                  style={{ height: '100vh' }}
                >
                  All Star Week. Stay tuned for updates!
                </Flex>
              </>
            )}
          {!loading && !error && (
            <div
              style={{ overflowY: 'scroll', height: 'auto', marginTop: '30px' }}
              onScroll={() => {
                const button = document.querySelector(
                  '.backToToday'
                ) as HTMLElement

                button.classList?.remove('animateBackToToday')

                button.style.opacity = '0'
                button.style.pointerEvents = 'none'
                button.style.cursor = 'default'

                setTimeout(function() {
                  button.style.opacity = '1'
                  button.style.pointerEvents = 'auto'
                  button.style.cursor = 'pointer'
                }, 3000)
              }}
            >
              {scheduleData.tableData.events.map((event: any, idx: number) => {
                return (
                  <div key={idx}>
                    <EventCard
                      key={idx}
                      bannerProps={{
                        bannerBackground: event.eventBanner?.backgroundImageUrl,
                        bannerLogo: event.eventBanner?.featuredImage,
                        host: event.eventBanner?.hostingTeam.shortName,
                        hostId: event.eventBanner?.hostingTeam.teamId,
                        location: event.eventBanner?.venue.title,
                        ticketLink: event.eventBanner?.ticket.link.href,
                      }}
                      matches={event.matches.filter(
                        (match: any) => match !== false
                      )}
                    />
                    {idx !== scheduleData.tableData.events.length - 1 && (
                      <Divider key={idx + 1} />
                    )}
                  </div>
                )
              })}
              {week !== currentWeek && (
                <BackToToday
                  backFunction={() => fetchScheduleData(currentWeek)}
                />
              )}
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
