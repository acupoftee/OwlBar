import React from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'
import { Flex } from 'antd-mobile'
import { getPrimaryColor } from 'owl-colors'
import Logos from '../../../resources/Logos'
import { colors } from '../../styles/theme'

const Wrapper = styled(Flex)`
  flex-direction: column;
  width: 100vw;
  height: 180px;
  margin-bottom: 4px;
  font-weight: 600;
`

const TeamBanner = styled(Flex)`
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
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const TeamLogo = styled.img`
  width: 50px;
  height: auto;
  margin: auto 10px;
  user-drag: none;
`

const DateBar = styled(Flex)`
  background-color: black;
  font-size: 12px;
  color: ${colors.white};
  width: 100%;
  height: 30px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MatchLabelWrapper = styled(Flex)<{
  colors: string[]
}>`
  height: '100%',
  background-image: linear-gradient(to right, ${props =>
    props.colors[0]} 49%, ${props => props.colors[1]} 50%);
  color: 'white';
  text-transform: 'uppercase';
  align-items: 'center';
  padding-top: '5%';
  font-size: '12px';
`

type TeamsBannerProps = {
  homeTeamAbbreviation: string
  awayTeamAbbreviation: string
  matchDate: number
  matchAddress?: string
}

const TeamsBanner = (props: TeamsBannerProps) => (
  <Wrapper>
    <TeamBanner>
      <Team background={getPrimaryColor(props.homeTeamAbbreviation).hex}>
        <Flex direction="column">
          <TeamLogo src={Logos[props.homeTeamAbbreviation] as string} />
          <span>{props.homeTeamAbbreviation}</span>
        </Flex>
      </Team>
      <MatchLabelWrapper
        colors={[
          getPrimaryColor(props.homeTeamAbbreviation).hex,
          getPrimaryColor(props.awayTeamAbbreviation).hex,
        ]}
      >
        <span style={{ backgroundColor: '#2c2c2c', padding: '3px' }}>
          Preview
        </span>
      </MatchLabelWrapper>
      <Team background={getPrimaryColor(props.awayTeamAbbreviation).hex}>
        <Flex direction="column">
          <TeamLogo src={Logos[props.awayTeamAbbreviation] as string} />
          <span>{props.awayTeamAbbreviation}</span>
        </Flex>
      </Team>
    </TeamBanner>
    <DateBar>{`${moment(props.matchDate).format('dddd, MMMM Do')} | ${moment(
      props.matchDate
    ).format('h:mm a')}`}</DateBar>
  </Wrapper>
)

export default TeamsBanner
