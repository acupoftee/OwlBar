import React from 'react'
import { Flex } from 'antd-mobile'
import { Table as VirtualizedTable } from 'react-virtualized'
import { getPrimaryColor } from 'owl-colors'
import styled from 'styled-components'
import { colors } from '../../styles/theme'

import Logos from '../../../resources/Logos'

const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  overflow-y: scroll !important;
`

const HeaderCell = styled.div<{
  width: string
}>`
  width: ${props => props.width}px;
  padding: 8px 14px;
  display: inline-block;
  background-color: #4a4c4e;
  color: #fff;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`

const Cell = styled.div<{
  width: string
  align?: 'left' | 'right'
  backgroundColor?: string
}>`
  display: inline-block;
  width: ${props => props.width}px;
  padding: 6px 14px;
  border-bottom: 2px solid #e2e2e2;
  text-align: ${props => props.align || 'center'};
  background-color: ${props => props.backgroundColor || 'transparent'};
`

const TeamLogo = styled.img`
  width: 25px;
  padding-right: 10px;
`

// const Conference = styled.h4`
//   padding: 10px 0;
//   margin: 0;
//   // background: #141114;
//   background-color: ${colors.black};
//   color: #fff;
//   font-weight: 100;
//   text-align: center;
//   text-transform: capitalize;
// `

const headerRowRenderer = ({
  className,
  style,
}: {
  className: string
  style: React.CSSProperties
}) => (
  <Flex className={className} style={style}>
    <HeaderCell key="team" width="90">
      team
    </HeaderCell>
    <HeaderCell key="rank" width="60">
      Rank
    </HeaderCell>
    <HeaderCell key="win" width="50">
      w
    </HeaderCell>
    <HeaderCell key="loss" width="50">
      l
    </HeaderCell>
    <HeaderCell key="diff" width="50">
      diff
    </HeaderCell>
  </Flex>
)

const ordinal = (number: number) => {
  const i = number % 10
  const j = number % 100
  if (i === 1 && j !== 11) {
    return number + 'st'
  } else if (i === 2 && j !== 12) {
    return number + 'nd'
  } else if (i === 3 && j !== 13) {
    return number + 'rd'
  } else {
    return number + 'th'
  }
}

const getDiffColor = (diff: string) => {
  if (diff[0] === '+') {
    return '#007a00'
  } else if (diff[0] === '-') {
    return '#e50e47'
  } else {
    return '#000'
  }
}
const rowRenderer = ({
  rowData,
  style,
}: {
  rowData: any
  style: React.CSSProperties
}) => (
  <Flex key={rowData.id} style={style}>
    <Cell
      key="name"
      align="left"
      style={{
        color: '#fff',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
      }}
      width="90"
      backgroundColor={getPrimaryColor(rowData.teamAbbName).hex}
    >
      <TeamLogo src={Logos[rowData.teamAbbName] as string} />
      {rowData.teamAbbName}
    </Cell>
    {/* <Cell key="division" width="60">
      {rowData.conf}
    </Cell> */}
    <Cell key="rank" width="60">
      {ordinal(rowData.rank)}
    </Cell>
    <Cell key="win" width="50">
      {rowData.w}
    </Cell>
    <Cell key="loss" width="50">
      {rowData.l}
    </Cell>
    <Cell
      key="diff"
      width="50"
      align="right"
      style={{
        color: getDiffColor(rowData.diff),
      }}
    >
      {rowData.diff}
    </Cell>
  </Flex>
)

const standingsTable = (teams: any) => (
  <div style={{ width: '100%' }}>
    <VirtualizedTable
      width={300}
      height={360}
      headerHeight={30}
      rowHeight={30}
      rowCount={teams.length}
      rowGetter={({ index }: { index: number }) => teams[index]}
      headerRowRenderer={headerRowRenderer}
      rowRenderer={rowRenderer}
    />
  </div>
)

const StandingsTable = (teams: any) => (
  <Wrapper direction="column" align="center">
    {standingsTable(teams.data)}
  </Wrapper>
)

export default StandingsTable
