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
        {matches.map((match: any) => (
          <MatchCard
            key={match.id}
            homeTeamAbb={match.competitors[0].abbreviatedName}
            awayTeamAbb={match.competitors[1].abbreviatedName}
            status={match.status}
            scores={match.scores}
            live={match.live}
            start={match.startDate}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default EventCard;
