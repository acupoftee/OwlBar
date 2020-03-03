import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import MatchCard from './MatchCard'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 10px;
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
    <div style={{ transform: 'scale(0.95)', marginTop: '-8px' }}>
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
)

export default EventCard
