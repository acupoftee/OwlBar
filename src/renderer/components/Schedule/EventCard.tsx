import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import MatchCard from './MatchCard'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 5px;
`
type BannerProps = {
  bannerBackground: string
  bannerLogo: string
  host: string
  hostId: number
  location: string
  ticketLink: string
}
const EventCard = ({
  bannerProps,
  matches,
}: {
  bannerProps: BannerProps
  matches: []
}) => (
  <Wrapper>
    {bannerProps.bannerBackground && (
      <Banner
        bannerBackground={bannerProps.bannerBackground}
        bannerLogo={bannerProps.bannerLogo}
        host={bannerProps.host}
        location={bannerProps.location}
        hostId={bannerProps.hostId}
        ticketLink={bannerProps.ticketLink}
      />
    )}
    <>
      {matches.map((match: any, idx: number) => {
        const content = (
          <MatchCard
            key={idx}
            homeTeamAbb={match.competitors[0].abbreviatedName}
            awayTeamAbb={match.competitors[1].abbreviatedName}
            status={match.status}
            scores={match.scores}
            live={match.live}
            start={match.startDate}
          />
        )
        return match.status === 'PENDING' ? (
          <Link
            key={idx}
            to={{
              pathname: `/preview/${match.id}`,
              state: {
                matchLocation: `${bannerProps.location}`,
              },
            }}
          >
            {content}
          </Link>
        ) : (
          <Link key={idx} to={`/match/${match.id}`}>
            {content}
          </Link>
        )
      })}
    </>
  </Wrapper>
)

export default EventCard
