import React from 'react'
import styled from 'styled-components'
import { Flex } from 'antd-mobile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons'

import Colors from '../../../resources/Colors'

// const electron = window.require('electron')

const BannerBackground = styled.div<{
  imageUrl: string
}>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: 100% 100%;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const BannerLogo = styled.div<{
  logoUrl: string
}>`
  background-image: url(${(props) => props.logoUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 120px;
  height: 120px;
  padding: 10px;
`

const EventWrapper = styled(Flex)<{
  background: string
}>`
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.background};
`

const EventInfo = styled(Flex)`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  font-weight: 600;
  text-transform: uppercase;
  flex: 1 1 50%;
  color: rgba(255, 255, 255, 0.9);
`

const Content = styled.p`
  height: auto;
  flex: 1 1 0%;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
`

const TicketLink = styled.span`
  cursor: pointer;

  &:hover {
    color: white;
  }
`

type Props = {
  bannerBackground: string
  bannerLogo: string
  host: string
  location: string
  hostId: number
  ticketLink: string
}

const Banner = (props: Props) => {
  return (
    <>
      <BannerBackground imageUrl={props.bannerBackground}>
        <BannerLogo logoUrl={props.bannerLogo} />
      </BannerBackground>
      <EventWrapper background={Colors[props.hostId] || 'black'}>
        <EventInfo>
          <Content>Hosted by {props.host}</Content>
        </EventInfo>
        <EventInfo>
          <FontAwesomeIcon
            icon={faTicketAlt}
            style={{
              marginRight: '10px',
              transformOrigin: 'center',
              transform: 'rotate(-45deg)',
            }}
          />
          online
          {/* <TicketLink
            onClick={() => {
              electron.remote.app.hide()
              electron.shell.openExternal(props.ticketLink)
            }}
          >
            tickets
          </TicketLink> */}
        </EventInfo>
        <EventInfo>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ marginRight: '10px' }}
          />
          {props.location}
        </EventInfo>
      </EventWrapper>
    </>
  )
}

export default Banner
