import React from 'react'
import moment from 'moment-timezone'
import styled from 'styled-components'
import { Flex } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/theme'

const electron = window.require('electron')

const Wrapper = styled(Flex)`
  width: 100vw;
  height: auto;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  transform: scale(0.9);
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    transform: translate3d(0, -3px, 3px) scale(0.92);
    img {
      filter: brightness(100%);
    }
  }
`

const Card = styled.div`
  &:hover {
    cursor: pointer;
  }
`
const Cover = styled.img`
  width: 100%;
  height: 194px;
  object-fit: cover;
  filter: brightness(95%);
`

const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  padding-top: 0;
  color: black;
`

const Topic = styled.span`
  background-color: ${colors.orange};
  padding: 10px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 0;
  position: relative;
  top: -28px;
  font-size: 10px;
`
const Date = styled.p`
  color: ${colors.liteGrey};
  margin-bottom: 10px;
`

const BlogTitle = styled.h3`
  margin-bottom: 10px;
`

const Summary = styled.p`
  line-height: 1.5;
`

type Props = {
  blogId: number
  blogImageUrl: string
  blogTopic: string
  blogTitle: string
  blogSummary: string
  datePublished: number
}

const NewsCard = (props: Props) => (
  <Wrapper>
    <Card
      onClick={() => {
        electron.remote.app.hide()
        electron.shell.openExternal(
          `https://overwatchleague.com/en-us/news/${props.blogId}`
        )
      }}
    >
      <div style={{ marginTop: '0' }}>
        <Cover
          src={props.blogImageUrl}
          alt={props.blogTitle}
          title={props.blogTitle}
        />
        <Topic>{props.blogTopic}</Topic>
      </div>
      <TextWrapper>
        <Date>{moment(props.datePublished).format('MMMM Do')}</Date>
        <BlogTitle>{props.blogTitle}</BlogTitle>
        <Summary>{props.blogSummary}</Summary>
      </TextWrapper>
    </Card>
  </Wrapper>
)

export default NewsCard
