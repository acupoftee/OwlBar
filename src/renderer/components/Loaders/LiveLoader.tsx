// https://github.com/xxhomey19/nba-bar/blob/master/renderer/components/Loader/BarLoader.js
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: inherit;
  height: 6px;
  background-color: white;
`

const loading = keyframes`
  from {
    z-index: 100;
    left: 50%;
    width: 0;
  }
  50% {
    z-index: 10;
    left: 0;
    width: 100%;
  }
  to {
    left: 0;
    width: 100%;
  }
`

const Bar = styled.div`
  content: '';
  display: inline;
  position: absolute;
  left: 50%;
  width: 0;
  height: 100%;
  text-align: center;
`

const RedBar = styled(Bar)`
  background-color: red;
  animation: ${loading} 2s ease-in-out infinite;
`

const WhiteBar = styled(Bar)`
  background-color: white;
  animation: ${loading} 2s ease-in-out 1s infinite;
`

const LiveLoader = () => (
  <Wrapper>
    <RedBar />
    <WhiteBar />
  </Wrapper>
)

export default LiveLoader
