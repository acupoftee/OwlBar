import React from 'react'
import styled, { css } from 'styled-components'

import { colors } from '../../styles/theme'

const Wrapper = styled.div`
  position: fixed;
  width: 30px;
  height: 72vh;
  right: 130px;
  padding: 4px 7px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${colors.black};
  color: ${colors.white};
  transform: rotate(-90deg) translateY(-175px);
  transform-origin: right top;
`

const ScrollLabel = styled.div`
  pointer-events: none;
  padding: 8px 0px 8px 14px;
  height: 30px;
  width: auto;
  z-index: 999;
  position: fixed;
  left: 0;
  background-color: ${colors.black};
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
`

const MenuItem = styled.span<{
  disable: boolean
}>`
  position: relative;
  font-size: 15px;
  width: 30px;
  height: 40px;
  padding: 4px;
  transform: rotate(90deg);
  transform-origin: right top;
  right: 10px;
  display: block;
  text-align: center;
  color: gray;
  font-weight: 500;

  ${props =>
    props.disable &&
    css`
      pointer-events: none;
    `}

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    pointer-events: none;
    color: ${colors.black}
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    color: orange !important;
  }

`

const WeekSelector = ({
  disable,
  handleClick,
  currentWeek,
}: {
  disable: boolean
  handleClick: (e: any) => void
  currentWeek: number
}) => {
  const weeks = []
  for (let i = -2; i <= 27; i++) {
    weeks.push(
      <MenuItem
        className={`menuItem menuItem-${i}`}
        data-week={i}
        onClick={handleClick}
        disable={disable}
      >
        {i}
      </MenuItem>
    )
  }
  const highlightedWeek = document.querySelector(
    `.menuItem-${currentWeek}`
  ) as HTMLElement

  if (highlightedWeek) {
    highlightedWeek.style.borderBottom = '15px solid orange'
    highlightedWeek.style.color = 'white'
  }
  return (
    <>
      <ScrollLabel>
        <p style={{ borderRight: '1px solid gray', paddingRight: '15px' }}>
          Weeks
        </p>
      </ScrollLabel>
      <Wrapper>
        <div>{weeks}</div>
      </Wrapper>
    </>
  )
}

export default WeekSelector
