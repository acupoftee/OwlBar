import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'antd-mobile'
import { colors } from '../../styles/theme'
import Colors from '../../../resources/Colors'

const Wrapper = styled.div`
  flex: 3;
  width: 100%;
  overflow-y: scroll !important;
  border-top: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};
  background: #fff;
`

const Row = styled(Flex)`
  flex: 1;
  width: 100%;
  padding: 10px 15px;
  border-top: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};
`

const Column = styled(Flex.Item)<{
  align: string
  color?: string
}>`
  margin: 0 !important;
  text-align: ${props => props.align};
  text-transform: uppercase;
  color: ${props => (props.color ? props.color : 'black')};
`

const move = (array: any[], from: number, to: number) => {
  const arr = [...array]
  if (from < 0) {
    from += arr.length
  }
  if (to < 0) {
    to += arr.length
  }
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}

const Table = ({ home, away }: { home: any; away: any }) => {
  const data: { [key: string]: number[] | string[] } = {}

  for (const key in home) {
    data[key] = [home[key], away[key]]
  }

  const rowNames = [
    'rank',
    'wins',
    'losses',
    'matches',
    'map w',
    'map l',
    'map t',
    'diff',
  ]

  const table = Object.keys(data).map(key => data[key])
  const revisedTable = move(table.slice(9), 4, 0)

  const mapStats = revisedTable[4].map((entry: string) => entry.split('-'))
  const editedMapStats = []

  for (let i = 0; i < 3; i++) {
    editedMapStats.push([mapStats[0][i], mapStats[1][i]])
  }
  revisedTable.splice(4, 1, ...editedMapStats)

  const displayedTable = revisedTable.map(
    (row: number[] | string[], idx: number) => (
      <Row key={idx}>
        <Column
          align="left"
          color={Colors[home.id]}
          style={{ fontWeight: 600 }}
        >
          {row[0]}
        </Column>
        <Column align="center">{rowNames[idx]}</Column>
        <Column
          align="right"
          color={Colors[away.id]}
          style={{ fontWeight: 600 }}
        >
          {row[1]}
        </Column>
      </Row>
    )
  )

  // const header = (
  //   <Row>
  //     <Column align="left">{home.teamAbbName}</Column>
  //     <Column align="center">Stats</Column>
  //     <Column align="right">{away.teamAbbName}</Column>
  //   </Row>
  // )
  // displayedTable.unshift(header)

  return <Wrapper>{displayedTable}</Wrapper>
}

export default Table
