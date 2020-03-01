import React from "react";
import styled from "styled-components";
import moment from "moment-timezone";
import { Flex } from "antd-mobile";
import { getPrimaryColor } from "owl-colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Logos from "../../../resources/Logos";
import { colors } from "../../styles/theme";

const SummaryCard = styled(Flex)`
  width: 100vw;
  height: 150px;
  font-weight: 600;
  flex-direction: column;
`;

const ScoreBanner = styled(Flex)`
  width: 100%;
  height: 120px;
  border-bottom: 5px solid ${colors.black};
`;

const Team = styled(Flex)<{
  background: string;
}>`
  background-color: ${props => props.background};
  width: 100%;
  height: 100%;
  color: white;
  font-size: 6vw;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TeamLogo = styled.img`
  width: 50px;
  height: auto;
  margin: auto 10px;
  user-drag: none;
`;

const IconContainer = styled.div`
  height: 10px;
`;

const Score = styled.span`
  font-size: 2.4em;
`;

const DateBar = styled(Flex)`
  background-color: black;
  color: ${colors.white};
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

type SummaryBannerProps = {
  homeTeamAbbreviation: string;
  awayTeamAbbreviation: string;
  scores: number[];
  matchDate: number;
};

const getWinner = (scores: number[]) => Math.max(scores[0], scores[1]);

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
          style={{ height: "100%" }}
        >
          <IconContainer>
            <FontAwesomeIcon
              icon={faCrown}
              style={{
                fontSize: ".7em",
                display: `${
                  getWinner(props.scores) === props.scores[0] ? "block" : "none"
                }`
              }}
            />
          </IconContainer>
          <Score>{props.scores[0]}</Score>
        </Flex>
      </Team>
      <Team background={getPrimaryColor(props.awayTeamAbbreviation).hex}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{ height: "100%" }}
        >
          <IconContainer>
            <FontAwesomeIcon
              icon={faCrown}
              style={{
                fontSize: ".7em",
                display: `${
                  getWinner(props.scores) === props.scores[1] ? "block" : "none"
                }`
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
    <DateBar>{`${moment(props.matchDate).format("dddd, MMM Do")} |
      ${moment(props.matchDate).format("h:mm a")}`}</DateBar>
  </SummaryCard>
);

export default SummaryBanner;
