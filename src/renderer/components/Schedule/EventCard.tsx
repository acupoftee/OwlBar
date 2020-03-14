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
interface BannerProps {
  bannerBackground: string
  bannerLogo: string
  host: string
  hostId: number
  location: string
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
      />
    )}
    <>
      {matches.map((match: any) => {
        const content = (
          <MatchCard
            key={match.id}
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
          <Link to={`/match/${match.id}`}>{content}</Link>
        )
      })}
    </>
  </Wrapper>
)

export default EventCard
