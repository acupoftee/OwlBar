import React from 'react'
import styled, { keyframes } from 'styled-components'
import moment from 'moment-timezone'
import { Flex } from 'antd-mobile'
import { getPrimaryColor } from 'owl-colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import Logos from '../../../resources/Logos'
import { colors } from '../../styles/theme'

const SummaryCard = styled(Flex)`
  width: 100vw;
  height: 180px;
  margin-bottom: 4px;
  font-weight: 600;
  flex-direction: column;
`

const ScoreBanner = styled(Flex)`
  width: 100%;
  height: 140px;
  border-bottom: 5px solid ${colors.black};
`

const Team = styled(Flex)<{
  background: string
}>`
  background-color: ${props => props.background};
  width: 100%;
  height: 100%;
  color: white;
  font-size: 6vw;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const TeamLogo = styled.img`
  width: 50px;
  height: auto;
  margin: auto 10px;
  user-drag: none;
`
const crowning = keyframes`
  from {
    transform: translateY(-40px);
  }
  to {
    transform: translateY(0px);
  }
`

const IconContainer = styled.div`
  height: 10px;
  transform: translateY(-40px);
  animation: ${crowning} 1s ease forwards;
`

const Score = styled.span`
  font-size: 2.4em;
`

const DateBar = styled(Flex)`
  background-color: black;
  color: ${colors.white};
  width: 100%;
  height: 30px;
  text-transform: uppercase;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`

const MatchLabelWrapper = styled.div<{
  colors: string[]
}>`
  height: 100%;
  background: linear-gradient(
    to right,
    ${props => props.colors[0]} 49%,
    ${props => props.colors[1]} 50%
  );
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding-top: 5%;
  font-size: 12px;
`

type SummaryBannerProps = {
  homeTeamAbbreviation: string
  awayTeamAbbreviation: string
  scores: number[]
  matchDate: number
  gameLength: number
}

const getWinner = (scores: number[]) => Math.max(scores[0], scores[1])

const SummaryBanner = (props: SummaryBannerProps) => (
  <SummaryCard>
    <ScoreBanner>
      <Team background={getPrimaryColor(props.homeTeamAbbreviation).hex}>
        <Flex direction="column">
          <TeamLogo src={Logos[props.homeTeamAbbreviation] as string} />
          <span>{props.homeTeamAbbreviation}</span>
        </Flex>
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{ height: '100%' }}
        >
          <IconContainer>
            <FontAwesomeIcon
              icon={faCrown}
              style={{
                fontSize: '.7em',
                display: `${
                  getWinner(props.scores) === props.scores[0] ? 'block' : 'none'
                }`,
              }}
            />
          </IconContainer>
          <Score>{props.scores[0]}</Score>
        </Flex>
      </Team>
      <MatchLabelWrapper
        colors={[
          getPrimaryColor(props.homeTeamAbbreviation).hex,
          getPrimaryColor(props.awayTeamAbbreviation).hex,
        ]}
      >
        <span style={{ backgroundColor: '#2c2c2c', padding: '3px' }}>
          Final
        </span>
      </MatchLabelWrapper>
      <Team background={getPrimaryColor(props.awayTeamAbbreviation).hex}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{ height: '100%' }}
        >
          <IconContainer>
            <FontAwesomeIcon
              icon={faCrown}
              style={{
                fontSize: '.7em',
                display: `${
                  getWinner(props.scores) === props.scores[1] ? 'block' : 'none'
                }`,
              }}
            />
          </IconContainer>
          <Score>{props.scores[1]}</Score>
        </Flex>
        <Flex direction="column">
          <TeamLogo src={Logos[props.awayTeamAbbreviation] as string} />
          <span>{props.awayTeamAbbreviation}</span>
        </Flex>
      </Team>
    </ScoreBanner>
    <DateBar>{`${moment(props.matchDate).format('dddd, MMMM Do')} |
      ${moment(props.matchDate).format('h:mm a')}`}</DateBar>
    <DateBar>{`${props.gameLength} map set`}</DateBar>
  </SummaryCard>
)

export default SummaryBanner
