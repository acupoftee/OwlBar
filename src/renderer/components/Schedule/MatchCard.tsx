import React from "react";
import styled from "styled-components";
import moment from "moment-timezone";
import { Flex } from "antd-mobile";
import { getPrimaryColor } from "owl-colors";
import { LiveLoader } from "../Loaders";
import Logos from "../../../resources/Logos";

const Card = styled(Flex)`
  width: 100vw;
  height: 45px;
  overflow: hidden;
  margin-top: 5%;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease;

  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    transform: translate3d(0, -3px, 3px);
    cursor: pointer;
  }
`;

const Team = styled(Flex)<{
  background: string;
}>`
  background-color: ${props => props.background};
  width: 40%;
  height: 100%;
  color: white;
  font-size: 6vw;
  justify-content: space-between;
  align-items: center;
`;

const TeamLogo = styled.img`
  width: 32px;
  height: auto;
  margin: auto 10px;
  user-drag: none;
`;

const MidBlock = styled(Flex)<{
  live?: boolean;
}>`
  color: black;
  background-color: white;
  width: 20%;
  height: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 11px;
    font-weight: 500;
    color: ${props => (props.live ? "red" : "gray")};
  }
`;

const DateString = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 13px;
`;

const DateBorder = styled.div`
  margin-left: 10px;
  border-bottom: 3px solid orange;
  width: 20px;
`;

const TeamName = styled.p`
  margin: auto 15px;
`;

export type MatchStatus = "PENDING" | "ONGOING" | "CONCLUDED";

const DateBlock = ({ startDate }: { startDate: number }) => {
  const time = moment(startDate).format("h:mm a");
  return (
    <MidBlock>
      <p style={{ fontSize: "12px" }}>{time}</p>
    </MidBlock>
  );
};

const ScoreBlock = ({ scores, live }: { scores: number[]; live: boolean }) => {
  return (
    <MidBlock live={live}>
      <span>{live ? "LIVE" : ""}</span>
      <p>{`${scores[0]} - ${scores[1]}`}</p>
      {live && <LiveLoader />}
    </MidBlock>
  );
};

const MatchCard = ({
  homeTeamAbb,
  awayTeamAbb,
  status,
  scores,
  live,
  start,
  showDate
}: {
  homeTeamAbb: string;
  awayTeamAbb: string;
  status: MatchStatus;
  scores: number[];
  live: boolean;
  start: number;
  showDate: boolean;
}) => {
  let midBlock: JSX.Element;
  if (status === "PENDING") {
    midBlock = <DateBlock startDate={start} />;
  } else {
    midBlock = <ScoreBlock scores={scores} live={live} />;
  }
  return (
    <>
      {console.log(showDate)}
      {showDate && (
        <div>
          <DateString>{moment(start).format("dddd, MMM Do")}</DateString>
          <DateBorder />
        </div>
      )}
      <Card>
        <Team background={getPrimaryColor(homeTeamAbb).hex}>
          <TeamName>{homeTeamAbb}</TeamName>
          <TeamLogo src={Logos[homeTeamAbb] as string} />
        </Team>
        {midBlock}
        <Team background={getPrimaryColor(awayTeamAbb).hex}>
          <TeamLogo src={Logos[awayTeamAbb] as string} />
          <TeamName>{awayTeamAbb}</TeamName>
        </Team>
      </Card>
    </>
  );
};

export default MatchCard;
