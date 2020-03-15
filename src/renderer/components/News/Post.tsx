import React from 'react'
import Interweave from 'interweave'
import moment from 'moment-timezone'
import styled from 'styled-components'

import { Flex } from 'antd-mobile'

import { colors } from '../../styles/theme'

const Wrapper = styled(Flex)`
  width: 100vw;
  height: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  & > div {
    p {
      margin: 12px 0;
      line-height: 1.5;
    }

    ul {
      margin: 12px 20px;

      li {
        margin: 5px auto;
      }
    }

    a {
      pointer-events: none;
      cursor: text;
      color: black;
    }

    .blog_card-block {
      background-color: white;
      border: 1px solid black;
      padding: 5px;
      font-size: 10px;
    }

    figure {
      margin: 30px auto;
    }

    img {
      height: auto;
      width: 100%;
      object-fit: cover;
    }

    figcaption {
      background-color: white;
      padding: 10px;
      width: 100%;
      font-size: 11px;
      font-weight: bold;
      font-style: italic;
    }

    strong {
      font-weight: 600;
    }
  }
`

const Header = styled.div`
  width: 100%;
`

const InfoBlock = styled.div`
  color: gray;
  font-size: 11px;
  margin: 10px auto;
`

type Props = {
  title: string
  author: string
  datePublished: number
  content: string
}

const Post = (props: Props) => (
  <Wrapper>
    <Header>
      <h3>{props.title}</h3>
      <InfoBlock>
        {`${moment(props.datePublished).format('MMMM Do')} | ${props.author}`}
      </InfoBlock>
    </Header>
    <Interweave content={props.content} tagName={'div'} />
  </Wrapper>
)

export default Post
