import React from 'react'
import styled, { keyframes } from 'styled-components'
import moment from 'moment-timezone'
import { Flex } from 'antd-mobile'
import { getPrimaryColor } from 'owl-colors'
import { LiveLoader } from '../Loaders'
import Logos from '../../../resources/Logos'

import { colors } from '../../styles/theme'

const Card = styled(Flex)`
  width: 100vw;
  height: 70px;
  overflow: hidden;
  margin-top: 6px;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease;
  flex-direction: column;

  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
    transform: translate3d(0, -3px, 3px);

    span {
      transform: scale(1.3);
    }
  }
`

const Team = styled(Flex)<{
  background: string
}>`
  background-color: ${props => props.background};
  width: 50%;
  height: 100%;
  color: white;
  font-size: 6vw;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const TeamLogo = styled.img`
  width: 32px;
  height: auto;
  margin: auto 10px;
  user-drag: none;
`

const DateBar = styled(Flex)<{
  live?: boolean
}>`
  background-color: ${props => (props.live ? 'red' : 'gray')};
  color: ${colors.white};
  width: 100%;
  height: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  align-items: center;
  justify-content: center;

  span {
    font-size: 11px;
    font-weight: 500;
    color: ${props => (props.live ? 'red' : 'gray')};
  }
`

const TeamName = styled.span`
  margin: auto 15px;
  transition: all 0.2s ease;
`

export type MatchStatus = 'PENDING' | 'ONGOING' | 'CONCLUDED'

const DateStrip = ({
  startDate,
  live,
  status,
}: {
  startDate: number
  live: boolean
  status: MatchStatus
}) => {
  const date = moment(startDate).format('dddd, MMM Do')
  const time = moment(startDate).format('h:mm a')
  let statusText: string
  if (status === 'PENDING') {
    statusText = time
  } else if (status === 'ONGOING') {
    statusText = 'LIVE'
  } else {
    statusText = 'Final'
  }
  return (
    <DateBar live={live ? live : undefined}>
      <p style={{ fontSize: '12px' }}>{`${date} | ${statusText}`}</p>
    </DateBar>
  )
}

const MatchCard = ({
  homeTeamAbb,
  awayTeamAbb,
  status,
  scores,
  live,
  start,
}: {
  homeTeamAbb: string
  awayTeamAbb: string
  status: MatchStatus
  scores: number[]
  live: boolean
  start: number
}) => {
  return (
    <div style={{ transform: 'scale(0.95)' }}>
      <Card>
        <DateStrip startDate={start} status={status} live={live} />
        <Flex style={{ width: '100vw' }}>
          <Team background={getPrimaryColor(homeTeamAbb).hex}>
            <TeamName>{homeTeamAbb}</TeamName>
            <TeamLogo src={Logos[homeTeamAbb] as string} />
            {status !== 'PENDING' && (
              <span style={{ transition: 'transform 0.2s ease' }}>
                {scores[0] || 0}
              </span>
            )}
          </Team>
          <Team background={getPrimaryColor(awayTeamAbb).hex}>
            {status !== 'PENDING' && (
              <span style={{ transition: 'transform 0.2s ease' }}>
                {scores[1] || 0}
              </span>
            )}
            <TeamLogo src={Logos[awayTeamAbb] as string} />
            <TeamName>{awayTeamAbb}</TeamName>
          </Team>
        </Flex>
        {live && <LiveLoader />}
      </Card>
    </div>
  )
}

export default MatchCard
