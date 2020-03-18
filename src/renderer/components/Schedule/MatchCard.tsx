import React from 'react'
import styled, { keyframes } from 'styled-components'
import moment from 'moment-timezone'
import { Flex } from 'antd-mobile'
import { getPrimaryColor } from 'owl-colors'
import { LiveLoader } from '../Loaders'
import Logos from '../../../resources/Logos'

import { colors } from '../../styles/theme'

const Wrapper = styled.div`
  transform: scale(0.95);
`
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

type Props = {
  homeTeamAbb: string
  awayTeamAbb: string
  status: MatchStatus
  scores: number[]
  live: boolean
  start: number
}
const MatchCard = (props: Props) => {
  return (
    <Wrapper>
      <Card>
        <DateStrip
          startDate={props.start}
          status={props.status}
          live={props.live}
        />
        <Flex style={{ width: '100vw' }}>
          <Team background={getPrimaryColor(props.homeTeamAbb).hex}>
            <TeamName>{props.homeTeamAbb}</TeamName>
            <TeamLogo src={Logos[props.homeTeamAbb] as string} />
            {props.status !== 'PENDING' && (
              <span style={{ transition: 'transform 0.2s ease' }}>
                {props.scores[0] || 0}
              </span>
            )}
          </Team>
          <Team background={getPrimaryColor(props.awayTeamAbb).hex}>
            {props.status !== 'PENDING' && (
              <span style={{ transition: 'transform 0.2s ease' }}>
                {props.scores[1] || 0}
              </span>
            )}
            <TeamLogo src={Logos[props.awayTeamAbb] as string} />
            <TeamName>{props.awayTeamAbb}</TeamName>
          </Team>
        </Flex>
        {props.live && <LiveLoader />}
      </Card>
    </Wrapper>
  )
}

export default MatchCard
