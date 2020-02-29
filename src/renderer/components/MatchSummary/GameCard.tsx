import React from "react";
import styled from "styled-components";
import { Flex } from "antd-mobile";
import { getPrimaryColor } from "owl-colors";
import { colors } from "../../styles/theme";
import Logos from "../../../resources/Logos";

const MapCard = styled(Flex)`
  width: 100vw;
  height: auto;
  margin-top: 4%;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease;
  flex-direction: column;
`;

const MapImageCover = styled.div<{
  mapImageUrl: string;
}>`
  height: 85px;
  width: 100%;
  background-image: linear-gradient(
      to top,
      rgb(0, 8, 12, 0.5) 100%,
      transparent
    ),
    url(${props => props.mapImageUrl});
  background-size: cover;
  background-repeat: no repeat;
  background-position: 0 50%;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  text-shadow: 0 1px black;
  border-bottom: 5px solid ${colors.orange};
  p {
    margin-top: 10%;
  }
`;

const Team = styled(Flex)<{
  background: string;
}>`
  background-color: ${props => props.background};
  width: 50%;
  height: 40px;
  color: white;
  font-size: 6vw;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TeamName = styled.p`
  margin: auto 15px;
`;

const TeamLogo = styled.img`
  width: 30px;
  height: auto;
  margin: 0 10px;
  user-drag: none;
`;

const MapBar = styled(Flex)`
  background-color: black;
  color: ${colors.white};
  width: 100%;
  height: 18px;
  text-transform: uppercase;
  font-size: 10px;
  justify-content: center;
  align-items: center;
`;

type GameProps = {
  homeTeam: string;
  awayTeam: string;
  scores: number[];
  mapImage: string;
  mapName: string;
  mapNumber: number;
};

const GameCard = (props: GameProps) => (
  <MapCard>
    <MapBar>{`Map ${props.mapNumber}: Hybrid`}</MapBar>
    {/* <MapBar>{`Map ${props.mapNumber}: ${props.mapName}`}</MapBar> */}
    <MapImageCover mapImageUrl={props.mapImage}>
      <p>{props.mapName}</p>
    </MapImageCover>
    <Flex style={{ width: "100vw" }}>
      <Team background={getPrimaryColor(props.homeTeam).hex}>
        <TeamName>{props.homeTeam}</TeamName>
        <TeamLogo src={Logos[props.homeTeam] as string} />
        <span>{props.scores[0]}</span>
      </Team>
      <Team background={getPrimaryColor(props.awayTeam).hex}>
        <span>{props.scores[1]}</span>
        <TeamLogo src={Logos[props.awayTeam] as string} />
        <TeamName>{props.awayTeam}</TeamName>
      </Team>
    </Flex>
    {/* <Flex
      direction="row"
      justify="between"
      style={{ width: "100%", height: "100%" }}
    >
      <div style={{ flex: "1 1 0%" }}>
        <TeamStrip>
          <TeamName>
            <img src={props.homeLogo} alt={props.homeTeam} />
            <span>{props.homeTeam}</span>
          </TeamName>
          <span>{props.scores[0]}</span>
        </TeamStrip>
        <TeamStrip>
          <TeamName>
            <img src={props.awayLogo} alt={props.awayTeam} />
            <span>{props.awayTeam}</span>
          </TeamName>
          <span>{props.scores[1]}</span>
        </TeamStrip>
      </div>
      <div
        style={{
          backgroundColor: "pink",
          width: "90px",
          height: "100%"
        }}
      >
        <p>{props.mapName}</p>
      </div>
    </Flex> */}
  </MapCard>
);

export default GameCard;
