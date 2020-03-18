import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Flex } from 'antd-mobile'
import {
  EventCard,
  BackToToday,
  WeekSelector,
  WeekLabel,
} from '../../components/Schedule'
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

  return (
    <PageBar currentTab={1}>
      <>
        <WeekSelector
          currentWeek={week}
          disable={loading}
          handleClick={(e: any) => {
            e.target.style.borderBottom = '15px solid orange'
            e.target.style.color = 'white'

            const menuItems = document.getElementsByClassName('menuItem')
            for (let i = 3; i < menuItems.length; i++) {
              if (i !== e.target.dataset.week) {
                const item = menuItems[i] as HTMLElement
                item.style.borderBottom = 'none'
                item.style.color = 'gray'
              }
            }

            fetchScheduleData(e.target.dataset.week)
          }}
        />
        <WeekLabel week={week} />
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
                <Flex
                  align="center"
                  justify="center"
                  style={{ height: '100vh' }}
                >
                  All Star Week. Stay tuned for updates!
                </Flex>
                {week !== currentWeek && (
                  <BackToToday
                    backFunction={() => fetchScheduleData(currentWeek)}
                  />
                )}
              </>
            )}
          {!loading && !error && (
            <div
              style={{ overflowY: 'scroll', height: 'auto' }}
              onScroll={() => {
                if (currentWeek === week) {
                  return
                }
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
                }, 5000)
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
                  backFunction={() => {
                    const menuItems = document.getElementsByClassName(
                      'menuItem'
                    )
                    for (let i = 3; i < menuItems.length; i++) {
                      if (i !== currentWeek) {
                        const item = menuItems[i] as HTMLElement
                        item.style.borderBottom = 'none'
                        item.style.color = 'gray'
                      }
                    }
                    fetchScheduleData(currentWeek)
                  }}
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
