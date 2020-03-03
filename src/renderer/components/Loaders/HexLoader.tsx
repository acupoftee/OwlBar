import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex } from 'antd-mobile'

const timing = '3s'

const rotateSmall = keyframes`
  100% {
    transform: rotate(1turn);
  }
`

const rotateLarge = keyframes`
  0% {
    clip-path: inset(0px 30px 30px 0px);
    -webkit-clip-path: inset(0px 30px 30px 0px);
  }
  50% {
    clip-path: inset(0px 150px 150px 0px);
    -webkit-clip-path: inset(0px 150px 150px 0px);
  }
  100% {
    transform: rotate(1turn);
    clip-path: inset(0px 30px 30px 0px);
    -webkit-clip-path: inset(0px 30px 30px 0px);
  }
`

const animateHex = keyframes`
  0% {
    transform: scale(1.02);
  }
  20%,
  50% {
    transform: scale(0.6);
    opacity: 0;
  }
  65% {
    transform: scale(1.02);
    opacity: 1;
  }
`

const HexContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const HexBorder = styled.div`
  // position: absolute;
  transform-origin: center;
  transform: scale(0.4);
  // left: 50%;
  // top: 50%;
  width: 170px;
  height: 170px;
  border: 2px solid #ebedf1;
  border-radius: 100%;

  &:before {
    content: '';
    position: absolute;
    width: 174px;
    height: 174px;
    border: 2px solid #8c97ac;
    border-radius: 100%;
    box-sizing: border-box;
    clip-path: inset(0px 135px 135px 0px);
    -webkit-clip-path: inset(0px 135px 135px 0px);
    top: -2px;
    left: -2px;
    animation: ${rotateSmall} 2s linear infinite;
    z-index: 2;
  }

  &:after {
    content: '';
    position: absolute;
    width: 174px;
    height: 174px;
    border: 2px solid #c5cbd5;
    border-radius: 100%;
    box-sizing: border-box;
    top: -2px;
    left: -2px;
    clip-path: inset(0px 30px 30px 0px);
    -webkit-clip-path: inset(0px 30px 30px 0px);
    animation: ${rotateLarge} 1s linear infinite;
  }
`

const Hexagons = styled.div`
  position: relative;
  border-radius: 100%;
  padding: 5%;
  top: 30px;
  left: 35px;
`

const Hexagon = styled.div`
  position: absolute;
  width: 40px;
  height: 23px;
  background-color: #79859e;
  transform: scale(1.02);
  transform-origin: center;

  &:before {
    content: '';
    position: absolute;
    top: -11.5px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 11.5px solid #79859e;
  }

  &:after {
    content: '';
    position: absolute;
    top: 23px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 11.5px solid #79859e;
  }

  &:nth-child(1) {
    animation: ${animateHex} ${timing} infinite;
  }
  &:nth-child(2) {
    left: 53px;
    animation: ${animateHex} ${timing} 0.2s infinite;
  }

  &:nth-child(3) {
    left: -13px;
    top: 46px;
    animation: ${animateHex} ${timing} 1s infinite;
  }

  &:nth-child(4) {
    left: 31px;
    top: 46px;
    animation: ${animateHex} ${timing} 1.2s infinite;
  }

  &:nth-child(5) {
    left: 75px;
    top: 46px;
    animation: ${animateHex} ${timing} 0.4s infinite;
  }

  &:nth-child(6) {
    top: 84px;
    animation: ${animateHex} ${timing} 0.8s infinite;
  }

  &:nth-child(7) {
    left: 53px;
    top: 84px;
    animation: ${animateHex} ${timing} 0.6s infinite;
  }
`

const HexLoader = () => (
  <HexContainer>
    <HexBorder>
      <Hexagons>
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
      </Hexagons>
    </HexBorder>
  </HexContainer>
)

export default HexLoader
