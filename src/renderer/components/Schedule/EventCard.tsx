import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import MatchCard from "./MatchCard";
import moment from "moment";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 20px;
`;

const EventCard = ({
  bannerBackground,
  bannerLogo,
  host,
  hostId,
  location,
  matches
}: {
  bannerBackground: string;
  bannerLogo: string;
  host: string;
  hostId: number;
  location: string;
  matches: [];
}) => {
  let currentDate: string = "";
  return (
    <Wrapper>
      {bannerBackground && (
        <Banner
          bannerBackground={bannerBackground}
          bannerLogo={bannerLogo}
          host={host}
          location={location}
          hostId={hostId}
        />
      )}
      <div style={{ transform: "scale(0.95)" }}>
        {matches.map((match: any) => {
          let showDate = false;
          let startMonth = moment(currentDate).format("MMM D");
          let apiStartMonth = moment(match.startDate).format("MMM D");
          if (apiStartMonth !== startMonth) {
            currentDate = apiStartMonth;
            showDate = true;
          }
          return (
            <MatchCard
              key={match.id}
              homeTeamAbb={match.competitors[0].abbreviatedName}
              awayTeamAbb={match.competitors[1].abbreviatedName}
              status={match.status}
              scores={match.scores}
              live={match.live}
              start={match.startDate}
              showDate={showDate}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default EventCard;
