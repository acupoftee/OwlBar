import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Icon } from 'antd-mobile'

import { colors } from '../../styles/theme'

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 30px;
  height: 78vh;
  padding: 4px 7px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${colors.black};
  color: ${colors.white};
  transform: rotate(-90deg) translateY(-175px);
  transform-origin: right top;
`

const MenuItem = styled.div`
  position: relative;
  font-size: 15px;
  width: 30px;
  height: 28px;
  transform: rotate(90deg);
  transform-origin: right top;
  right: 10px;
  // margin-left: 5px;
  // display: flex;
  // justify-content: center;

  &:hover {
    cursor: pointer;
    color: orange;
  }

  &:focus {
    outline: 4px solid orange;
  }
`

// function selected(e: React.MouseEvent) {
//   console.log(e.target)
//   e.preventDefault()
//   e.target.style.borderBottom = '2px solid orange'
//   // Here write a For Loop to put "border-style: none" to everyone else
// }

const WeekSelector = ({
  date,
  nextPage,
  prevPage,
  disableNext,
  disablePrev,
}: {
  date: number
  nextPage: () => void
  prevPage: () => void
  disableNext?: boolean
  disablePrev?: boolean
}) => {
  // const weeks = []
  // for (let i = 0; i <= 27; i++) {
  //   weeks.push(<MenuItem onClick={selected}>{i}</MenuItem>)
  // }
  // return (
  //   <Wrapper>
  //     <div>{weeks}</div>
  //   </Wrapper>
  // )
}

export default WeekSelector
