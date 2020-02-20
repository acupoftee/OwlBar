import React from "react";
import styled from "styled-components";
import { Flex } from "antd-mobile";
import { getPrimaryColor } from "owl-colors";
import Logos from "../../../resources/Logos";

const Card = styled(Flex)`
  width: 100vw;
  height: 45px;
  overflow: hidden;
  margin-top: 5%;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const Team = styled(Flex)<{
  background: string;
}>`
  background-color: ${props => props.background};
  width: 42%;
  height: 100%;
  color: white;
  font-size: 6vw;
  justify-content: space-between;
  align-items: center;
`;

const TeamLogo = styled.img`
  width: 35px;
  height: auto;
  margin: auto 10px;
`;

const MidBlock = styled.div`
  color: black;
  background-color: white;
  width: 18%;
  height: 100%;
  text-align: center;
  display: table;
  font-size: 16px;

  & p {
    display: table-cell;
    vertical-align: middle;
  }
`;

const TeamName = styled.p`
  margin: auto 15px;
`;

const MatchCard = ({
  homeTeamAbb,
  awayTeamAbb
}: {
  homeTeamAbb: string;
  awayTeamAbb: string;
}) => (
  <Card>
    <Team background={getPrimaryColor(homeTeamAbb).hex}>
      <TeamName>{homeTeamAbb}</TeamName>
      <TeamLogo src={Logos[homeTeamAbb] as string} />
    </Team>
    <MidBlock>
      <p>3 - 0</p>
    </MidBlock>
    <Team background={getPrimaryColor(awayTeamAbb).hex}>
      <TeamLogo src={Logos[awayTeamAbb] as string} />
      <TeamName>{awayTeamAbb}</TeamName>
    </Team>
  </Card>
);

export default MatchCard;
