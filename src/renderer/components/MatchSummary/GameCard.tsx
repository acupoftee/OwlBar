import React from 'react'
import styled from 'styled-components'
import { Flex } from 'antd-mobile'
import { getPrimaryColor } from 'owl-colors'
import { colors } from '../../styles/theme'
import Logos from '../../../resources/Logos'

const MapCard = styled(Flex)`
  width: 100vw;
  height: auto;
  margin-bottom: 4px;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease;
  flex-direction: column;

  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    transform: translate3d(0, -3px, 3px);

    span {
      transform: scale(1.3);
    }

    & > div {
      box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.1);

      .mapName {
        transform: translateX(-100%);
      }

      .mapCaption {
        transform: translateX(0) translateY(-16px);
      }
    }
  }
`

const MapImageCover = styled.div<{
  mapImageUrl: string
}>`
  height: 85px;
  width: 100%;
  background-image: url(${props => props.mapImageUrl});
  box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no repeat;
  background-position: 0 50%;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  text-shadow: 0 1px black;
  border-bottom: 3px solid ${colors.orange};
  transition: box-shadow 0.5s ease;

  p {
    transition: transform 0.3s ease;
    margin-top: 10%;
  }
`

const MapLowerThird = styled.p`
  transition: transform 0.3s ease, background-color 0.7s ease;
  transform: translateX(-100%) translateY(-16px);
  font-size: 12px;
  padding: 2px auto;
  background-color: black;
`

const Team = styled(Flex)<{
  background: string
}>`
  background-color: ${props => props.background};
  width: 50%;
  height: 40px;
  color: white;
  font-size: 6vw;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const TeamName = styled.span`
  transition: transform 0.2s ease;
  margin: auto 15px;
`

const TeamLogo = styled.img`
  width: 30px;
  height: auto;
  margin: 0 10px;
  user-drag: none;
`

const MapBar = styled(Flex)`
  background-color: black;
  color: ${colors.white};
  width: 100%;
  height: 25px;
  text-transform: uppercase;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`

type GameProps = {
  homeTeam: string
  awayTeam: string
  scores?: number[]
  mapImage: string
  mapName: string
  mapNumber: number
  mapType: string
}

const GameCard = (props: GameProps) => (
  <div style={{ transform: 'scale(0.95)' }}>
    <MapCard>
      <MapBar>{`Map ${props.mapNumber} - ${props.mapType}`}</MapBar>
      <MapImageCover mapImageUrl={props.mapImage}>
        <p className="mapName">{props.mapName}</p>
        <MapLowerThird className="mapCaption">{props.mapName}</MapLowerThird>
      </MapImageCover>
      <Flex style={{ width: '100vw' }}>
        <Team background={getPrimaryColor(props.homeTeam).hex}>
          <TeamName>{props.homeTeam}</TeamName>
          <TeamLogo src={Logos[props.homeTeam] as string} />
          {props.scores && (
            <span style={{ transition: 'transform 0.2s ease' }}>
              {props.scores[0]}
            </span>
          )}
        </Team>
        <Team background={getPrimaryColor(props.awayTeam).hex}>
          {props.scores && (
            <span style={{ transition: 'transform 0.2s ease' }}>
              {props.scores[1]}
            </span>
          )}
          <TeamLogo src={Logos[props.awayTeam] as string} />
          <TeamName>{props.awayTeam}</TeamName>
        </Team>
      </Flex>
    </MapCard>
  </div>
)

export default GameCard
